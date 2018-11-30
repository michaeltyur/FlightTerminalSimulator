using Models.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlightTerminalDb.Interfaces
{
   public interface IFlightRepository : IDisposable
    {
        bool AddFlight(Flight flight);
        bool Update(Flight flight);
        bool DeleteFlight(Guid id);
        ICollection<Flight> GetAllFlights();
    }
}
