using DAL.Interface;
using DAL.Loggers;
using DAL.Processes;
using FlightTerminalDb;
using Models;
using Models.Interfaces;
using Models.Models;
using Models.Steps;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DAL.BL
{
    /// <summary>
    /// Represents flight terminal logic
    /// </summary>
    public class TerminalContext : ITerminalContext
    {
        private static readonly object _locker = new object();

        private Random _random;

        public delegate void MessageHandler(Message message);

        private ConcurrentList<Flight> _flights;

        private FlightProcess _flightProcess;

        public IClientFlightLogger ClientFlightLogger { get; }

        private DbLogger _dbLogger;

        public TerminalContext(DbManager dbManager)
        {
            _dbLogger = new DbLogger(dbManager);

            _flights = new ConcurrentList<Flight>();
            _flightProcess = new FlightProcess(_flights);
            ClientFlightLogger = new ClientFlightLogger();

            _random = new Random();

            _flightProcess.WriteDbLog += AddDbLog;
            _flightProcess.RemoveGoOutFlights += RemoveGoOutFlight;
        }

        /// <summary>
        /// Adds logs to data base
        /// </summary>
        /// <param name="flight">flight object</param>
        /// <param name="log">log about this flight</param>
        private void AddDbLog(Flight flight, string log)
        {
            if (flight != null && !string.IsNullOrEmpty(log))
            {
                _dbLogger.AddLogToDb(flight, log);
            }
        }

        /// <summary>
        /// Adds the flight to process
        /// </summary>
        /// <param name="flight"></param>
        /// <returns>the result of adding</returns>
        /// 
        public bool AddFlight(Flight flight)
        {
            if (flight != null)
            {
                if (_flights.Count < DalGlobals.MAX_TERMINAL_CAPACITY)
                {
                    ThreadPriority threadPriority = ThreadPriority.Lowest;

                    _flights.Add(flight);
                    _dbLogger.AddFlightToDb(flight);

                    //Messages to client
                    ((ClientFlightLogger)ClientFlightLogger).NewFlightAdded(flight);
                    if (flight.Fuel < 30)//Low level of fuel
                    {
                        threadPriority = ThreadPriority.Highest;
                        ((ClientFlightLogger)ClientFlightLogger).LowFuelLevel(flight);
                        _dbLogger.LowLevelFuelLog(flight);
                    }

                    Task.Factory.StartNew(async () => await AddFlightAsync(flight, threadPriority));

                    return true;
                }
                else
                {
                    _dbLogger.TerminalFullLog(flight);
                    ((ClientFlightLogger)ClientFlightLogger).TerminalIsFull(flight);
                    return false;
                }
            }
            else return false;

        }


    /// <summary>
    /// Sends the flight to first step when recived him toback , sends hin to removing from system
    /// </summary>
    /// <param name="flight">flight object</param>
    public async Task AddFlightAsync(Flight flight, ThreadPriority threadPriority)
    {
        try
        {
            Thread.CurrentThread.Priority = threadPriority;
            var flightOut = await _flightProcess.AddFlight(flight);
            RemoveGoOutFlight(flightOut);
        }
        catch (Exception ex)
        {

            throw ex;
        }

    }

    /// <summary>
    /// removes flight from collection of flights
    /// </summary>
    /// <param name="flight">flight object</param>
    private void RemoveGoOutFlight(Flight flight)
    {
        lock (_locker)
        {
            Flight _flight = flight;
            try
            {
                if (flight != null)
                {
                    _flights.Remove(_flight);
                    _dbLogger.FlightRemovedLog(flight);
                    ((ClientFlightLogger)ClientFlightLogger).FlightRemoved(flight);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }

    /// <summary>
    /// Returns Flights collection
    /// </summary>
    /// <returns></returns>
    public ICollection<Flight> GetTerminalState()
    {
        lock (_locker)
        {
            try
            {
                Flight[] list = new Flight[_flights.Count];
                _flights.CopyTo(list, 0);
                return list;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
}
