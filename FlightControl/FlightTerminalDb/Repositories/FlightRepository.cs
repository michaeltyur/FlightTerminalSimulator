using FlightTerminalDb.Interfaces;
using Models.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace FlightTerminalDb.Repositories
{
    public class FlightRepository : IFlightRepository
    {
        private TerminalContextDb _terminalContextDb;
        private static readonly object _writeReadLock = DbManager.WriteReadLock;

        public FlightRepository(TerminalContextDb terminalContextDb)
        {
            _terminalContextDb = terminalContextDb;
        }

        public bool AddFlight(Flight flight)
        {
            lock (_writeReadLock)
            {
                try
                {
                    if (_terminalContextDb.Flights.Count() > 100)
                        DeleteMultiply(50);

                    if(flight.Id==Guid.Empty)flight.Id = Guid.NewGuid();
                    flight.Created = DateTime.Now;
                    _terminalContextDb.Add(flight);
                    _terminalContextDb.SaveChanges();

                    return true;
                }
                catch (Exception ex)
                {

                    throw ex;
                }
            }

        }
        private bool IsIdExist(Guid id)
        {
            try
            {
                return _terminalContextDb.Flights.FirstOrDefault(l => l.Id == id) != null;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public bool Update(Flight flight)
        {
            lock (_writeReadLock)
            {
                if (flight != null)
                {
                    try
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
                    catch (Exception ex)
                    {

                        throw ex;
                    }

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
                    try
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
                    catch (Exception ex)
                    {

                        throw ex;
                    }

                }
                return false;
            }

        }

        public void DeleteMultiply(int quantity)
        {
            lock (_writeReadLock)
            {
                var itemsToDelete = _terminalContextDb.Flights.Take(quantity);
                foreach (var item in itemsToDelete)
                {
                    var logs = _terminalContextDb.LogMsgs.Where(l => l.FlightId == item.Id);
                    _terminalContextDb.LogMsgs.RemoveRange(logs);
                }
                _terminalContextDb.Flights.RemoveRange(itemsToDelete);
                _terminalContextDb.SaveChanges();
            }

        }

        public void Dispose()
        {
            _terminalContextDb.Dispose();
        }

        public ICollection<Flight> GetAllFlights()
        {
            lock (_writeReadLock)
            {
                try
                {
                    return _terminalContextDb.Flights.ToList();
                }
                catch (Exception ex)
                {

                    throw ex;
                }
            }
        }
    }
}
