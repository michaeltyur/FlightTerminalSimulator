using System;
using System.Collections.Generic;
using System.Text;
using static DAL.Loggers.ClientFlightLogger;

namespace DAL.Interface
{
    public interface IClientFlightLogger
    {
         event MessageHandler SendMessage;
    }
}
