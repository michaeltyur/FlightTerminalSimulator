using DAL.Interfaces;
using Models.Interfaces;
using Models.Models;
using Models.Models.Steps;
using Models.Steps;
using System;
using System.Linq;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Processes
{
    public class FlightProcess : IProcess
    {
        private static readonly object _locker = new object();
        private static readonly object _collectionLocker = new object();

        protected Dictionary<PlaneTerminalState, BasicStep> _steps;
        private ConcurrentList<Flight> _flights;

        public delegate void DbLogHandler(Flight flight, string log);
        public delegate void FlightGoOutHandler(Flight flight);

        public event DbLogHandler WriteDbLog;
        public event FlightGoOutHandler RemoveGoOutFlights;

        public FlightProcess(ConcurrentList<Flight> flights)
        {
            Initialization();
            _flights = flights;
        }
        private void Initialization()
        {
            _steps = new Dictionary<PlaneTerminalState, BasicStep>
            {
                { PlaneTerminalState.In_Air_1, new InAir1(DalGlobals.STEP1_LENGTH, DalGlobals.STEP1_MIN_SPEED, DalGlobals.STEP1_MAX_SPEED) },
                { PlaneTerminalState.In_Air_2, new InAir2(DalGlobals.STEP2_LENGTH, DalGlobals.STEP2_MIN_SPEED, DalGlobals.STEP2_MAX_SPEED) },
                { PlaneTerminalState.In_Air_3, new InAir3(DalGlobals.STEP3_LENGTH, DalGlobals.STEP3_MIN_SPEED, DalGlobals.STEP3_MAX_SPEED) },
                { PlaneTerminalState.Landing_4, new RunWay(DalGlobals.RUNWAY_LENGTH, DalGlobals.RUNWAY_MIN_SPEED, DalGlobals.RUNWAY_MAX_SPEED) },
                { PlaneTerminalState.Arrivals_Stock_5, new ParkingAfterLanding(DalGlobals.PARKING5_LEFT_LENGTH, 10, 15, DalGlobals.MAX_PLANS_IN_STOCK_ZONE) },
                { PlaneTerminalState.Вisembarking_Boarding_Passengers_6, new LoadingUnloadingLeft(DalGlobals.LOADING_UNLOADING_6_LENGTH) },
                { PlaneTerminalState.Вisembarking_Boarding_Passengers_7, new LoadingUnloadingRight(DalGlobals.LOADING_UNLOADING_7_LENGTH) },
                { PlaneTerminalState.Departurs_Stock_8, new ParkingBeforTakeoff(DalGlobals.PARKING8_RIGHT_LENGTH, 10, 15, DalGlobals.MAX_PLANS_IN_STOCK_ZONE) },
                { PlaneTerminalState.InAirTakeoff_10, new InAirTakeoff(DalGlobals.TAKEOFF9_LENGTH, DalGlobals.TAKEOFF9_MIN_SPEED, DalGlobals.TAKEOFF9_MAX_SPEED) }
            };

        }

        /// <summary>
        /// Adds flight to processe
        /// </summary>
        /// <param name="flight">flight</param>
        /// <returns></returns>
        public async Task<Flight> AddFlight(Flight flight)
        {
            var _flight = flight;
            //yala!!! let's do it...
            _flight = await Step1(_flight);
            _flight = await Step2(_flight);
            _flight = await Step3(_flight);

            _flight = await Runway(_flight);
            _flight = await ParkingLeft(_flight);

            if(LoadingUnloadingLeft.IsFreeForEnter())
                _flight = await ВisembarkingBoardingLeft(_flight);
            else _flight = await ВisembarkingBoardingRight(_flight);

            _flight = await ParkingRight(_flight);

            _flight = await Runway(_flight);//takeoff
            return await TakeOffInAir(_flight);
        }


        public async Task<Flight> Step1(Flight flight)
        {
            var _flight = flight;
            var step = _steps[PlaneTerminalState.In_Air_1];
            return await step.AddFlightAsync(_flight);
        }
        public async Task<Flight> Step2(Flight flight)
        {
            var _flight = flight;
            var step = _steps[PlaneTerminalState.In_Air_2];
            return await step.AddFlightAsync(_flight);
        }
        public async Task<Flight> Step3(Flight flight)
        {
            var _flight = flight;
            var step = _steps[PlaneTerminalState.In_Air_3];
            return await step.AddFlightAsync(_flight);
        }
        public async Task<Flight> Runway(Flight flight)
        {
            var _flight = flight;
            var step = _steps[PlaneTerminalState.Landing_4];
            return await step.AddFlightAsync(_flight);
        }
        public async Task<Flight> ParkingLeft(Flight flight)
        {
            var _flight = flight;
            var step = _steps[PlaneTerminalState.Arrivals_Stock_5];
            return await step.AddFlightAsync(_flight);
        }
        public async Task<Flight> ВisembarkingBoardingLeft(Flight flight)
        {
            var _flight = flight;
            var step = _steps[PlaneTerminalState.Вisembarking_Boarding_Passengers_6];
            return await step.AddFlightAsync(_flight);
        }
        public async Task<Flight> ВisembarkingBoardingRight(Flight flight)
        {
            var _flight = flight;
            var step = _steps[PlaneTerminalState.Вisembarking_Boarding_Passengers_7];
            return await step.AddFlightAsync(_flight);
        }
        public async Task<Flight> ParkingRight(Flight flight)
        {
            var _flight = flight;
            var step = _steps[PlaneTerminalState.Departurs_Stock_8];
            return await step.AddFlightAsync(_flight);
        }
        public async Task<Flight> TakeOffInAir(Flight flight)
        {
            var _flight = flight;
            var step = _steps[PlaneTerminalState.InAirTakeoff_10];
            return await step.AddFlightAsync(_flight);
        }



        private void LastStep(Flight flight)
        {
            //var step = _steps[PlaneTerminalState.InAirTakeoff_10] as InAirTakeoff;
            //if (!step.IsEmptyFlightsOut())
            //{
            //    var outFlights = step.TakeAllFlight();
            //    foreach (var item in outFlights)
            //    {
            try
            {
                Task.Run(() => RemoveGoOutFlights?.Invoke(flight));
            }
            catch (Exception ex)
            {

                throw ex;
            }

            //    }
            //    //    Parallel.ForEach(outFlights, flight =>
            //    //    {
            //    //        RemoveGoOutFlights?.Invoke(flight);
            //    //    });
            //}
        }

        public ICollection<BasicStep> GetterminalState()
        {
            var terminal = new BasicStep[_steps.Count];
            _steps.Values.CopyTo(terminal, 0);
            return terminal;
        }
    }
}
