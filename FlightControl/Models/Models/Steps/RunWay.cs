using Models.Interfaces;
using Models.Steps;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Models.Models.Steps
{
    public class RunWay : BasicStep
    {
        public static int FlightCount { get;  set; }

        private static readonly SemaphoreSlim RunwayAsyncLock = new SemaphoreSlim(1,1);

        public RunWay(int runwayLenght,
                      int runwayMinSpeed,
                      int runwayMaxSpeed) : base(runwayLenght,
                                                 runwayMinSpeed,
                                                 runwayMaxSpeed,
                                                 PlaneTerminalState.Non)
        {
            FlightCount = 0;
        }
        public override async Task<Flight> AddFlightAsync(Flight flight)
        {
            try
            {
                await RunwayAsyncLock.WaitAsync();
                if (flight != null)
                {
                    var _flight = flight;
                    FlightCount++;
                    return await RunProcessAsync(_flight);

                }
                else return await Task.FromResult(flight);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                FlightCount--;
                RunwayAsyncLock.Release();              
            }

        }
        private async Task<Flight> RunProcessAsync(Flight flight)
        {
            try
            {

                var _flight = flight;

                _flight.DistanceToTerminal = 0;

                //what is the previous step
                if (_flight.PlaneTerminalState == PlaneTerminalState.In_Air_3)
                {
                    InAir3.Step3AsyncLock.Release();
                    InAir3.FlightCount--;
                    _flight.PlaneTerminalState = PlaneTerminalState.Landing_4;
                }
                else if (_flight.PlaneTerminalState == PlaneTerminalState.Departurs_Stock_8)
                {
                    ParkingBeforTakeoff.FlightCount--;
                    _flight.PlaneTerminalState = PlaneTerminalState.Takeoff_9;
                }
                else _flight.PlaneTerminalState = PlaneTerminalState;

                int waitTime = (InAir3.IsBusy()) ? 1000 : 2000;//Step 3 is full(SemaphoreSlim is close)

                await Task.Delay(waitTime);

                return _flight;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
