using FlightTerminalDb.Interfaces;
using Models.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace FlightTerminalDb.Repositories
{
    public class FlightRepository : IFlightRepository
    {
        private TerminalContextDb _terminalContextDb;
        private static readonly object _writeReadLock = DbManager.WriteReadLock;
        private LogMsgRepository _logMsgRepository;

        public FlightRepository(TerminalContextDb terminalContextDb)
        {
            _terminalContextDb = terminalContextDb;
        }

        public Guid AddFlight(Flight flight)
        {
            lock (_writeReadLock)
            {
                try
                {
                    if (_terminalContextDb.Flights.Count() > 100)
                    {
                        DeleteMultiply(50);
                    }

                    // if (flight.Id == Guid.Empty) flight.Id = Guid.NewGuid();
                    flight.Created = DateTime.Now;
                    _terminalContextDb.Add(flight);
                    _terminalContextDb.SaveChanges();

                    return flight.Id;
                }
                catch (Exception ex)
                {

                    throw ex;
                }

            }


        }
        private bool IsIdExist(Guid id)
        {
            return _terminalContextDb.Flights.FirstOrDefault(l => l.Id == id) != null;
        }
        public bool Update(Flight flight)
        {
            lock (_writeReadLock)
            {
                if (flight != null)
                {

                    var oldFlight = _terminalContextDb.Flights.FirstOrDefault(fl => fl.Id == flight.Id);
                    if (flight != null)
                    {
                        oldFlight.Created = flight.Created;
                        oldFlight.DistanceToTerminal = flight.DistanceToTerminal;
                        oldFlight.From = flight.From;
                        oldFlight.Fuel = flight.Fuel;
                        oldFlight.Image = flight.Image;
                        // oldFlight.LogMsgs = flight.LogMsgs;
                        oldFlight.Modified = DateTime.Now;
                        oldFlight.NameOfСhiefPilot = flight.NameOfСhiefPilot;
                        oldFlight.NumberOfPass = flight.NumberOfPass;
                        oldFlight.PlaneTerminalState = flight.PlaneTerminalState;
                        oldFlight.Speed = flight.Speed;

                        _terminalContextDb.SaveChanges();
                        return true;
                    }
                    return false;

                }
                return false;
            }

        }

        public bool DeleteFlight(Guid id)
        {
            lock (_writeReadLock)
            {
                if (id != null)
                {

                    var flight = _terminalContextDb.Flights.FirstOrDefault(fl => fl.Id == id);
                    if (flight != null)
                    {

                        _terminalContextDb.Remove(flight);
                        _terminalContextDb.SaveChanges();
                        return true;
                    }
                    return false;

                }
                return false;
            }

        }

        public bool DeleteMultiply(int quantity)
        {
            lock (_writeReadLock)
            {
                var itemsToDelete = _terminalContextDb.Flights.OrderBy(f => f.Created).Take(quantity);

                foreach (var item in itemsToDelete)
                {

                    var log = _terminalContextDb.LogMsgs.FirstOrDefault(l => l.FlightId.Equals(item.Id));
                    if (log != null)
                    {
                        _terminalContextDb.LogMsgs.Remove(log);

                    }

                    DeleteFlight(item.Id);
                }
                _terminalContextDb.SaveChanges();
                // _terminalContextDb.LogMsgs.RemoveRange(logs);
                //  _terminalContextDb.Flights.RemoveRange(itemsToDelete);
                //  _terminalContextDb.SaveChanges();
            }
            return true;

        }

        public void Dispose()
        {
            _terminalContextDb.Dispose();
        }

        public ICollection<Flight> GetAllFlights()
        {
            lock (_writeReadLock)
            {
                return _terminalContextDb.Flights.ToList();
            }
        }

        public Flight GetFlight(Guid id)
        {
            lock (_writeReadLock)
            {
                var flight = _terminalContextDb.Flights.FirstOrDefault(fl => fl.Id == id);
                return flight;
            }

        }

        public bool ContensIp(string ip)
        {
            lock (_writeReadLock)
            {
                return _terminalContextDb.Flights.Where(el => el.SenderIp == ip).Count() > 0;
            }

        }
    }
}
