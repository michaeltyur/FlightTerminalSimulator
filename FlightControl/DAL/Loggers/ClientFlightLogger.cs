using DAL.Interface;
using FlightTerminalDb;
using Models.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Loggers
{
    public class ClientFlightLogger: IClientFlightLogger
    {
        public delegate void MessageHandler(Message message);

        public event MessageHandler SendMessage;

        public ClientFlightLogger()
        {
       
        }

        private Message GetNewMessage(string type,string content)
        {
            var message = new Message
            {
                Type = type,
                Content = content,
                Created = DateTime.Now
            };
            return message;
        }
        private void SendMessageToClient(Message msg)
        {
            SendMessage?.Invoke(msg);
        }

        public void NewFlightAdded(Flight flight)
        {
            var type = "alert-success";
            var content = $"flight from {flight.From} is added to terminal";
            var msg = GetNewMessage(type,content);
            SendMessageToClient(msg);
        }
        public void FlightRemoved(Flight flight)
        {
            var type = "alert-primary";
            var content = $"flight from {flight.From} is removed from terminal";
            var msg = GetNewMessage(type, content);
            SendMessageToClient(msg);
        }
        public void LowFuelLevel(Flight flight)
        {
            var type = "alert-danger";
            var content = $"flight from {flight.From} low fuel level: {flight.Fuel}";
            var msg = GetNewMessage(type, content);
            SendMessageToClient(msg);
        }
        public void TerminalIsFull(Flight flight)
        {
            var type = "alert-warning";
            var content = $"terminal is full,flight from {flight.From} is redirected to another airfield";
            var msg = GetNewMessage(type, content);
            SendMessageToClient(msg);
        }
    }
}
