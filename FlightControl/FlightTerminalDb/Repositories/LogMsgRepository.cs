using FlightTerminalDb.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace FlightTerminalDb.Repositories
{
    public class LogMsgRepository : ILogMsgRepository
    {
        private static readonly object _writeReadLock = DbManager.WriteReadLock;

        private TerminalContextDb _terminalContextDb;

        public LogMsgRepository(TerminalContextDb terminalContextDb)
        {
            _terminalContextDb = terminalContextDb;
        }

        public bool AddLogMsg(LogMsg log)
        {
            lock (_writeReadLock)
            {
                try
                {
                        log.Id = Guid.NewGuid();
                        log.Created = DateTime.Now;
                        log.Modified = null;
                        _terminalContextDb.Add(log);
                        _terminalContextDb.SaveChanges();
                        return true;
                }
                catch (Exception ex)
                {

                    throw ex;
                }
            }

        }
        private bool IsIdExist(Guid id)
        {
            try
            {
                return _terminalContextDb.LogMsgs.FirstOrDefault(l => l.Id == id) != null;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public LogMsg GetLogById(Guid id)
        {
            lock (_writeReadLock)
            {
                try
                {
                    return _terminalContextDb.LogMsgs.FirstOrDefault(l => l.Id == id);
                }
                catch (Exception)
                {

                    throw;
                }
            }
        }
        public bool DeleteLogMsg(Guid id)
        {
            lock (_writeReadLock)
            {
                if (id!=null)
                {
                    try
                    {
                        var log = _terminalContextDb.LogMsgs.FirstOrDefault(l => l.Id == id);
                        if (log != null)
                        {
                            _terminalContextDb.Remove(log);
                            _terminalContextDb.SaveChanges();
                            return true;
                        }
                        return false;
                    }
                    catch (Exception ex)
                    {

                        throw ex;
                    }

                }
                return false;
            }

        }

        public ICollection<LogMsg> GetAllLogMsg()
        {
            lock (_writeReadLock)
            {
                try
                {
                    return _terminalContextDb.LogMsgs.ToList();
                }
                catch (Exception ex)
                {

                    throw ex;
                }
            }

        }
        public void Dispose()
        {

            _terminalContextDb.Dispose();
        }

        public bool Update(LogMsg log)
        {
            lock (_writeReadLock)
            {
                if (log != null)
                {
                    try
                    {
                        var oldLog = _terminalContextDb.LogMsgs.FirstOrDefault(l => l.Id == log.Id);
                        if (log != null)
                        {
                            oldLog.Created = log.Created;
                            oldLog.Flight = log.Flight;
                            oldLog.FlightId = log.FlightId;
                            oldLog.Message = log.Message;
                            oldLog.Modified = DateTime.Now;

                            _terminalContextDb.SaveChanges();
                            return true;
                        }
                        return false;
                    }
                    catch (Exception ex)
                    {

                        throw ex;
                    }

                }
                return false;
            }

        }
    }
}
