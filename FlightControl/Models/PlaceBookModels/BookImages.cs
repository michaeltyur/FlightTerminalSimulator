using System;
using System.Collections.Generic;
using System.Text;

namespace Models.PlaceBookModels
{
    public class BookImages
    {
        public int BookImagesID { get; set; }
        public int BookID { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
    }
}
