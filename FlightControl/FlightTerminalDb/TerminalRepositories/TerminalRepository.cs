using FlightTerminalDb.Interfaces;
using Models.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace FlightTerminalDb.TerminalRepositories
{
    public class TerminalRepository : ITerminalRepository
    {
        private TerminalContextDb _terminalContextDb;
        public TerminalRepository(TerminalContextDb terminalContextDb)
        {
            _terminalContextDb = terminalContextDb;
        }

        public bool AddFlight(Flight flight)
        {
           
                //try
                //{
                    _terminalContextDb.Add(flight);
                    _terminalContextDb.SaveChanges();
                    return true;
                //}
                //catch (Exception ex)
                //{

                //    throw ex;
                //}
        
        }

        public bool DeleteFlight(Guid id)
        {
            if (Guid.Empty!=id)
            {

                var flight = _terminalContextDb.Flights.FirstOrDefault(fl => fl.Equals(id));
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

        public ICollection<Flight> GetAllFlights()
        {
            throw new NotImplementedException();
        }
    }
}
