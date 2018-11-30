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
    public class LoadingUnloadingLeft : BasicStep
    {
        private static readonly SemaphoreSlim _asyncLock = new SemaphoreSlim(1,1);
        public static int FlightCount { get; set; }

        public LoadingUnloadingLeft(int boardingLenght) : base(boardingLenght,
                                                               1,
                                                               1,
                                                               PlaneTerminalState.Вisembarking_Boarding_Passengers_6)
        {
            FlightCount = 0;
        }
        public static bool IsFreeForEnter()
        {
            return _asyncLock.CurrentCount > 0;
        }
        public override async Task<Flight> AddFlightAsync(Flight flight)
        {
            try
            {
               await _asyncLock.WaitAsync();
               ParkingAfterLanding.FlightCount--;
               FlightCount++;
               return await RunProcessLoadingUnloadingAsync(flight);
            }
            catch (Exception ex)
            {

                throw ex;
            }
            finally
            {
                Thread.CurrentThread.Priority = ThreadPriority.Normal;
                FlightCount--;
                _asyncLock.Release();
            }
        }

        private async Task<Flight> RunProcessLoadingUnloadingAsync(Flight flight)
        {
            try
            {
                if (flight != null)
                {
                    var _flight = flight;
                    _flight.PlaneTerminalState = PlaneTerminalState;
                    _flight.Speed = 1;
                    _flight.Fuel = 100;

                    int bisembarkingTime = _flight.NumberOfPass * 10;

                    int boardingTime = GetPassagers() *10;

                    await Task.Delay(bisembarkingTime + boardingTime);

                    return _flight;
                }
                else return await Task.FromResult(flight);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
