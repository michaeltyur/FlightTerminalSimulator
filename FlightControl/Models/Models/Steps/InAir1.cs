using Models.Data;
using Models.Interfaces;
using Models.Steps;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Steps
{
    public class InAir1: BasicStep
    {
        public static int FlightCount { get;  set; }
        public InAir1(int step1Lenght,int step1MinSpeed, int step1MaxSpeed) :base(step1Lenght,
                                                                                  step1MinSpeed,
                                                                                  step1MaxSpeed,
                                                                                  PlaneTerminalState.In_Air_1)
        {
            FlightCount = 0;
        }

        public override async Task<Flight> AddFlightAsync(Flight flight)
        {
            try
            {
                FlightCount++;
                flight.DistanceToTerminal = Globals.MAX_DISTANCE_TO_TERMINAL - Random.Next(Globals.STEP1_LENGTH);
                return await base.AddFlightAsync(flight);
            }
            catch (Exception ex)
            {

                throw ex;
            }
            //finally
            //{
            //    FlightCount--;
            //}

        }
    }
}
