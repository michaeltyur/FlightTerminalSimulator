using Models.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces
{
    public interface IStep
    {
        bool AddFlight(Flight flight);

        void RemoveFlight(Flight flight);

    }
}
