using Models.Data;
using Models.Interfaces;
using Models.Steps;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Models.Models.Steps
{
    public class InAir3 : BasicStep
    {
        public static readonly SemaphoreSlim Step3AsyncLock = new SemaphoreSlim(2,2);

        public static int FlightCount { get; set; }

        public InAir3(int step3Lenght, int step3MinSpeed, int step3MaxSpeed) : base(step3Lenght,
                                                                                    step3MinSpeed,
                                                                                    step3MaxSpeed,
                                                                                    PlaneTerminalState.In_Air_3)
        {
            FlightCount = 0;
        }
        public static bool IsBusy()
        {
            return Step3AsyncLock.CurrentCount == 0;
        }
        public override async Task<Flight> AddFlightAsync(Flight flight)
        {
            try
            {
                await Step3AsyncLock.WaitAsync();
                InAir2.FlightCount--;
                FlightCount++;
                flight.DistanceToTerminal = Globals.MAX_DISTANCE_TO_TERMINAL - (Globals.STEP1_LENGTH + Globals.STEP2_LENGTH + Random.Next(Globals.STEP3_LENGTH));
                return await base.AddFlightAsync(flight);
            }
            catch (Exception ex)
            {

                throw ex;
            }
            finally
            {
                // FlightCount--;
               // Step3AsyncLock.Release();
            }

        }
    }
}
