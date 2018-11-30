using Models.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlightTerminalDb.Interfaces
{
   public interface ILogMsgRepository : IDisposable
    {
        bool AddLogMsg(LogMsg log);
        bool Update(LogMsg log);
        bool DeleteLogMsg(Guid id);
        ICollection<LogMsg> GetAllLogMsg();
    }
}
