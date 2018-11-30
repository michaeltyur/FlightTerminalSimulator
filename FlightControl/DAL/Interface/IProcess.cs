using Models.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface IProcess
    {
        Task<Flight> AddFlight(Flight flight);
    }
}
