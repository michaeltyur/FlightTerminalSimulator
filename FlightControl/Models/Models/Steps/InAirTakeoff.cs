using Models.Data;
using Models.Interfaces;
using Models.Steps;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Steps
{
    public class InAirTakeoff : BasicStep
    {
        private static readonly object _locker = new object();
        public static int FlightCount { get; protected set; }
        public InAirTakeoff(int takeOffLenght, int takeOffMinSpeed, int takeOffMaxSpeed) : base(takeOffLenght,
                                                                                                takeOffMinSpeed,
                                                                                                takeOffMaxSpeed,
                                                                                                PlaneTerminalState.InAirTakeoff_10)
        {
            FlightCount = 0;
        }
        public override async Task<Flight> AddFlightAsync(Flight flight)
        {
            try
            {
                RunWay.FlightCount--;
                FlightCount++;
                flight.DistanceToTerminal =Random.Next(Globals.TAKEOFF9_LENGTH);
                return await base.AddFlightAsync(flight);
            }
            catch (Exception ex)
            {

                throw ex;
            }
            finally
            {
                FlightCount--;
            }

        }
    }
}
