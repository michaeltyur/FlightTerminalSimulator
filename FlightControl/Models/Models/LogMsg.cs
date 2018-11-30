using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models.Models
{
   public class LogMsg : BaseEntity
    {
        [Required]
        [Range(2, 50)]
        public string Message { get; set; }

        //Foreign key for Flight
        [ForeignKey("Flight")]
        public Guid FlightId { get; set; }
        public Flight Flight { get; set; }


    }
}
