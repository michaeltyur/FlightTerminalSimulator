using DAL.Interface;
using FlightControl.Core.Interfaces;
using FlightTerminalDb;
using FlightTerminalDb.Interfaces;
using FlightTerminalDb.TerminalRepositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
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
        private IHttpContextAccessor _accessor;

        public TerminalHub(ITerminalContext terminalContext,
                           ITerminalEmitter terminalEmitter,
                           DbManager dbManager,
                           IHttpContextAccessor accessor)
        {
            _dbManager = dbManager;
            _terminalContext = terminalContext;
            _terminalEmitter = terminalEmitter;
            _accessor = accessor;
        }

        public void SendFlight(dynamic flight)
        {
            if (flight != null)
            {
                var remoteIpAddress = _accessor.HttpContext.Connection.RemoteIpAddress.ToString();
                Flight localFlight = new Flight
                {
                    NameOfСhiefPilot = flight.nameOfСhiefPilot,
                    From = flight.from,
                    Speed = flight.speed,
                    NumberOfPass = flight.numberOfPass,
                    Fuel = flight.fuel,
                    Image = flight.image,
                    DistanceToTerminal = flight.distanceToTerminal,
                    SenderIp = remoteIpAddress
                };
                var result = true;
                if (localFlight != null)
                    result = _terminalContext.AddFlight(localFlight);
            }


        }

        public Task JoinGroup(string groupName)
        {
            return Groups.AddToGroupAsync(Context.ConnectionId, groupName);
        }

        public Task LeaveGroup(string groupName)
        {
            return Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
        }

        public string GetConnectionId()
        {
            return Context.ConnectionId;
        }
    }
}
