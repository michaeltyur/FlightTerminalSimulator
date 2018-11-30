using Models.Data;
using Models.Interfaces;
using Models.Steps;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Steps
{
    public class InAir2 : BasicStep
    {
        public static int FlightCount { get; set; }
        public InAir2(int step2Lenght, int step2MinSpeed, int step2MaxSpeed) : base(step2Lenght,
                                                                                    step2MinSpeed,
                                                                                    step2MaxSpeed,
                                                                                    PlaneTerminalState.In_Air_2)
        {
            FlightCount = 0;
        }

        public override async Task<Flight> AddFlightAsync(Flight flight)
        {
            try
            {
                InAir1.FlightCount--;
                FlightCount++;
                flight.DistanceToTerminal = Globals.MAX_DISTANCE_TO_TERMINAL - (Globals.STEP1_LENGTH + Random.Next(Globals.STEP2_LENGTH));
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
