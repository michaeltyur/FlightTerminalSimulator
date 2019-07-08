using DAL.Interface;
using FlightControl.Core.Data;
using FlightControl.Core.Hubs;
using FlightControl.Core.Interfaces;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Models.Models;
using FlightTerminalDb;

namespace FlightControl.Core.Emitters
{
    public class TerminalEmitter : ITerminalEmitter
    {
        private ITerminalContext _terminalContext;
        private IHubContext<TerminalHub, ITypedHubClient> _hubContext;

        private Timer _timer;

        public TerminalEmitter(IHubContext<TerminalHub,
                                ITypedHubClient> hubContext,
                                ITerminalContext terminalContext)
        {
            _hubContext = hubContext;
            _terminalContext = terminalContext;
            _terminalContext.ClientFlightLogger.SendMessage += SendMessage;
            _terminalContext.ClientFlightLogger.SendFlight += SendFlightInfo;

            _timer = new Timer(SendTerminalState, null, TimeSpan.Zero,
            TimeSpan.FromMilliseconds(ServerGlobals.EMITTER_TIMER_INTERVAL_MILSEC));
        }

        public void SendTerminalState(object sender)
        {
            var planeArrey = _terminalContext.GetTerminalState();
            _hubContext.Clients.All.BroadcastTerminal(planeArrey);
           // _hubContext.Clients.Client("fff").BroadcastTerminal(planeArrey);
            
        }
        public void SendMessage(object message)
        {
            _hubContext.Clients.All.BroadcastMessage(message);
           // _hubContext.Clients.Client("fff").BroadcastMessage(message);
        }

        public void SendFlightInfo(Flight flight)
        {
            _hubContext.Clients.All.BroadcastFlight(flight);
            // _hubContext.Clients.Client("fff").BroadcastMessage(message);
        }
    }
}
