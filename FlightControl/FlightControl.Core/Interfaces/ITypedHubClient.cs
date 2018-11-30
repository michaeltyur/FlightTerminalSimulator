using Models.Models;
using Models.Steps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightControl.Core.Interfaces
{
    public interface ITypedHubClient
    {
        Task BroadcastMessage(object message);
        Task BroadcastTerminal(ICollection<Flight> terminal);
    }
}
