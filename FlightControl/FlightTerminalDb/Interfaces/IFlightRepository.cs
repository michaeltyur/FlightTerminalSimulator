using Models.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlightTerminalDb.Interfaces
{
   public interface IFlightRepository : IDisposable
    {
        Guid AddFlight(Flight flight);
        Flight GetFlight(Guid id);
        bool Update(Flight flight);
        bool DeleteFlight(Guid id);
        ICollection<Flight> GetAllFlights();
    }
}
