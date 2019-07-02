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

        public void SendFlight(dynamic flight)
        {
            if (flight != null)
            {
                //Guid tmp;
                //var id = Guid.TryParse((string)flight.id,out tmp);

                Flight localFlight = new Flight
                {
                    NameOfСhiefPilot = flight.nameOfСhiefPilot,
                    From = flight.from,
                    Speed = flight.speed,
                    NumberOfPass = flight.numberOfPass,
                    Fuel = flight.fuel,
                    Image = flight.image,
                    DistanceToTerminal = flight.distanceToTerminal
                };
                var result = true;
                if (localFlight != null)
                    result = _terminalContext.AddFlight(localFlight);
            }


        }
    }
}
