using System.ComponentModel.DataAnnotations;

namespace Models.Models
{
    public class Flight : BaseEntity
    {

        [Range(2, 30)]
        public string NameOfСhiefPilot { get; set; }

        [Required]
        [Range(2,30)]
        public string From { get; set; }

        [Required]
        public int Speed { get; set; }

        [Required]
        public int NumberOfPass { get; set; }

        public int Fuel { get; set; }

        public string Image { get; set; }

        public int DistanceToTerminal { get; set; }

        public PlaneTerminalState PlaneTerminalState { get; set; }

    }
    public enum PlaneTerminalState
    {
        In_Air_1=1,
        In_Air_2,
        In_Air_3,
        Landing_4,
        Arrivals_Stock_5,
        Вisembarking_Boarding_Passengers_6,
        Вisembarking_Boarding_Passengers_7,
        Departurs_Stock_8,
        Takeoff_9,
        InAirTakeoff_10,
        Non
    }
}
