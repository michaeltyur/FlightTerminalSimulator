using DAL.Interface;
using FlightControl.Core.Interfaces;
using FlightTerminalDb;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using MailKit.Net.Smtp;
using MimeKit;

namespace FlightControl.Core.Hubs
{
    public class TerminalHub : Hub<ITypedHubClient>
    {
        private ITerminalContext _terminalContext;
        private ITerminalEmitter _terminalEmitter;
        private DbManager _dbManager;
        private IHttpContextAccessor _accessor;
        private readonly string  myIp= "79.176.225.33.test";

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
                string remoteIpAddress = _accessor.HttpContext.Connection.RemoteIpAddress.ToString();

                Task sendMail = Task.Run(() => SendMail(remoteIpAddress));

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

        public void SendMail(string remoteIpAddress)
        {
            if (remoteIpAddress==myIp || _dbManager.FlightRepository.ContensIp(remoteIpAddress))
            {
                return;
            }

            MimeMessage message = new MimeMessage();

            MailboxAddress from = new MailboxAddress("Notyfy",
            "shopsecondhand2018@gmail.com");
            message.From.Add(from);

            MailboxAddress to = new MailboxAddress("Mike",
            "michaeltiour@gmail.com");
            message.To.Add(to);

            message.Subject = "You have a new site gest!";

            BodyBuilder bodyBuilder = new BodyBuilder();
           // bodyBuilder.HtmlBody = $"<h1>Hi, Mike , your site has a new gests from ip: {remoteIpAddress}</h1>";
            bodyBuilder.TextBody = $"Hi, Mike , your site has a new gest from ip: {remoteIpAddress}";

            message.Body = bodyBuilder.ToMessageBody();

            SmtpClient client = new SmtpClient();
            client.Connect("smtp.gmail.com", 465, true);
            client.Authenticate("shopsecondhand2018@gmail.com", "1950t03b03");

            client.Send(message);
            client.Disconnect(true);
            client.Dispose();

        }
    }
}
