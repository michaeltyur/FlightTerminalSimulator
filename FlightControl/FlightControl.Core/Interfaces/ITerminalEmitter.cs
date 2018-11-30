using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightControl.Core.Interfaces
{
   public interface ITerminalEmitter
    {
        void SendTerminalState(object sender);//object sender parameter=> for timer
        void SendMessage(object message);
    }
}
