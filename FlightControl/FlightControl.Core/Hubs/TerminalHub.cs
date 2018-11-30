using DAL.Interface;
using FlightControl.Core.Interfaces;
using FlightTerminalDb;
using FlightTerminalDb.Interfaces;
using FlightTerminalDb.TerminalRepositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;
using Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightControl.Core.Hubs
{
    public class TerminalHub : Hub<ITypedHubClient>
    {
        private ITerminalContext _terminalContext;
        private ITerminalEmitter _terminalEmitter;
        private DbManager _dbManager;

        public TerminalHub(ITerminalContext terminalContext,
                           ITerminalEmitter terminalEmitter,
                           DbManager dbManager)
        {
            _dbManager = dbManager;
            _terminalContext = terminalContext;
            _terminalEmitter = terminalEmitter;
        }

        public void SendFlight(Flight flight)
        {
            var result = true;
            if (flight != null)
                result = _terminalContext.AddFlight(flight);
        }
    }
}
