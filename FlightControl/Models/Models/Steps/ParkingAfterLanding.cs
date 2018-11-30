﻿using Models.Interfaces;
using Models.Steps;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Steps
{
    public class ParkingAfterLanding : BasicStep
    {
        public static int FlightCount { get; set; }
        public ParkingAfterLanding(int parkingLenght,
                                   int parkingMinSpeed,
                                   int parkingMaxSpeed,
                                   int maxPlaneInZone) : base(parkingLenght,
                                                               parkingMinSpeed,
                                                               parkingMaxSpeed,
                                                               PlaneTerminalState.Arrivals_Stock_5)
        {
            _maxPlaneInZone = maxPlaneInZone;
            FlightCount = 0;
        }
        public override async Task<Flight> AddFlightAsync(Flight flight)
        {
            try
            {
                if (flight != null)
                {
                    var _flight = flight;
                    try
                    {
                        FlightCount++;
                        return await RunProcessAsync(_flight);
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }
                }
                else return await Task.FromResult(flight);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private async Task<Flight> RunProcessAsync(Flight flight)
        {
            try
            {          
                var _flight = flight;

                _flight.PlaneTerminalState = PlaneTerminalState;

                int waitTime = Random.Next(1000,3000);

                await Task.Delay(waitTime);

                return _flight;
            }
            catch (Exception ex)
            {
                // throw ex;
                return null;
            }

        }
    }
}
