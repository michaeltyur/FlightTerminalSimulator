using System;
using System.Collections.Generic;
using System.Text;

namespace Models.PlaceBookModels
{
   public class PlaceImages
    {
        public int PlaceImagesID { get; set; }
        public int PlaceID { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
    }
}
