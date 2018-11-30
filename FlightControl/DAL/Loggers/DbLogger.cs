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

        public void AddFlightToDb(Flight flight)
        {
            if (flight != null)
            {
                try
                {
                    _dbManager.FlightRepository.AddFlight(flight);
                    FlightAddedLog(flight);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
        }

        public void RemoveFlightFromDb(Flight flight)
        {
            if (flight != null)
            {
                try
                {
                    _dbManager.FlightRepository.DeleteFlight(flight.Id);
                    FlightRemovedLog(flight);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
        }

        private void FlightAddedLog(Flight flight)
        {
            if (flight != null)
            {
                try
                {
                    var message = $"flight from {flight.From} is added to terminal";
                    LogMsg logMsg = GetLogMsg(flight, message);
                    _dbManager.LogMsgRepository.AddLogMsg(logMsg);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
        }

        public void FlightRemovedLog(Flight flight)
        {
            if (flight != null)
            {
                try
                {
                    var message = $"flight from {flight.From} is removed";
                    LogMsg logMsg = GetLogMsg(flight, message);
                    _dbManager.LogMsgRepository.AddLogMsg(logMsg);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
        }

        public void LowLevelFuelLog(Flight flight)
        {
            if (flight != null)
            {
                try
                {
                    var message = $"flight from {flight.From} has low level of fuel";
                    LogMsg logMsg = GetLogMsg(flight, message);
                    _dbManager.LogMsgRepository.AddLogMsg(logMsg);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
        }

        public void TerminalFullLog(Flight flight)
        {
            if (flight != null)
            {
                try
                {
                    var message = $"terminal is full,flight from {flight.From} is redirected to another airfield";
                    LogMsg logMsg = GetLogMsg(flight, message);
                    _dbManager.LogMsgRepository.AddLogMsg(logMsg);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
        }

        public void AddLogToDb(Flight flight,string msg)
        {
            if (flight != null)
            {
                try
                {
                    var message = msg;
                    LogMsg logMsg = GetLogMsg(flight, message);
                    _dbManager.LogMsgRepository.AddLogMsg(logMsg);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
        }

    }
}
