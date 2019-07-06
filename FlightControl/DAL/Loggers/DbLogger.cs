using FlightTerminalDb;
using Models.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Loggers
{
    /// <summary>
    /// 
    /// </summary>
    public class DbLogger
    {

        private DbManager _dbManager;

        public DbLogger(DbManager dbManager)
        {
            _dbManager = dbManager;
        }

        private LogMsg GetLogMsg(Flight flight, string message)
        {
            if (flight != null && !string.IsNullOrEmpty(message))
            {
                LogMsg newLog = new LogMsg
                {
                    Created = DateTime.Now,
                    Flight = flight,
                    FlightId = flight.Id,
                    Message = message
                };
                return newLog;
            }
            else return null;
        }

        public Guid AddFlightToDb(Flight flight)
        {
            Guid id = Guid.Empty;
            if (flight != null)
            {

                id = _dbManager.FlightRepository.AddFlight(flight);
                FlightAddedLog(flight);
            }
            return id;
        }

        public void RemoveFlightFromDb(Flight flight)
        {
            if (flight != null)
            {

                _dbManager.FlightRepository.DeleteFlight(flight.Id);
                FlightRemovedLog(flight);
            }
        }

        private void FlightAddedLog(Flight flight)
        {
            if (flight != null)
            {

                var message = $"flight from {flight.From} is added to terminal";
                LogMsg logMsg = GetLogMsg(flight, message);
                _dbManager.LogMsgRepository.AddLogMsg(logMsg);
            }
        }

        public void FlightRemovedLog(Flight flight)
        {
            if (flight != null)
            {

                var message = $"flight from {flight.From} is removed";
                LogMsg logMsg = GetLogMsg(flight, message);
                _dbManager.LogMsgRepository.AddLogMsg(logMsg);
            }
        }

        public void LowLevelFuelLog(Flight flight)
        {
            if (flight != null)
            {
                var message = $"flight from {flight.From} has low level of fuel";
                LogMsg logMsg = GetLogMsg(flight, message);
                _dbManager.LogMsgRepository.AddLogMsg(logMsg);
            }
        }

        public void TerminalFullLog(Flight flight)
        {
            if (flight != null)
            {
                var message = $"terminal is full,flight from {flight.From} is redirected to another airfield";
                LogMsg logMsg = GetLogMsg(flight, message);
                _dbManager.LogMsgRepository.AddLogMsg(logMsg);
            }
        }

        public void AddLogToDb(Flight flight, string msg)
        {
            if (flight != null)
            {

                var message = msg;
                LogMsg logMsg = GetLogMsg(flight, message);
                _dbManager.LogMsgRepository.AddLogMsg(logMsg);
            }
        }

    }
}
