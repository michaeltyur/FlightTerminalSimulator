using FlightTerminalDb;
using FlightTerminalDb.Interfaces;
using Models.Models;
using Models.Steps;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using static DAL.BL.TerminalContext;

namespace DAL.Interface
{
    public interface ITerminalContext
    {
        IClientFlightLogger ClientFlightLogger { get; }
        bool AddFlight(Flight flight);
        ICollection<Flight> GetTerminalState();
    }
}
