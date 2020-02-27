using System;
using System.Collections.Generic;
using System.Text;

namespace Models.PlaceBookModels
{
    public class Place
    {
        public int PlaceID { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public int Zoom { get; set; }
        public List<PlaceImages> PlaceImages { get; set; }

    }
}
