using Models.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Concurrent;
using System.Threading;
using System.Diagnostics;
using Models.Data;

namespace Models.Steps
{
    public class BasicStep
    {
        protected int _length;
        protected int _minSpeed;
        protected int _maxSpeed;        
        protected Random Random;
        protected int _maxPlaneInZone;

        public PlaneTerminalState PlaneTerminalState { get; set; }

        public BasicStep(int currentLength,
                         int minSpeed,
                         int maxSpeed,
                         PlaneTerminalState planeTerminalState)
        {
            _length = currentLength;
            _minSpeed = minSpeed;
            _maxSpeed = maxSpeed;
            PlaneTerminalState = planeTerminalState;
            Random = new Random();
        }

        public virtual async Task<Flight> AddFlightAsync(Flight flight)
        {
            try
            {
                if (flight != null)
                {
                    var _flight = flight;
                    try
                    {                   
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

                if (_flight.PlaneTerminalState == PlaneTerminalState.In_Air_3) _flight.PlaneTerminalState = PlaneTerminalState.Landing_4;
                else if (_flight.PlaneTerminalState == PlaneTerminalState.Departurs_Stock_8) _flight.PlaneTerminalState = PlaneTerminalState.Takeoff_9;
                else _flight.PlaneTerminalState = PlaneTerminalState;

                _flight.Speed = GetSpeed();
                int waitTime = (_flight.Speed != 0) ? _length / _flight.Speed : _length / GetSpeed();
                await Task.Delay(waitTime);

                return _flight;
            }
            catch (Exception ex)
            {
               throw ex;
            }
        }

        protected int GetSpeed()
        {
            try
            {
                if (_maxSpeed == 0 || _minSpeed == 0)
                    return Random.Next(2, 8);
                else return Random.Next(_minSpeed, _maxSpeed);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        protected int GetPassagers()
        {
            try
            {
               return Random.Next(Globals.NUM_OF_PASS_MIN, Globals.NUM_OF_PASS_MAX);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
    }
}
