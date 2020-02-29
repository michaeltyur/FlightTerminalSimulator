using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Http;
using Models.PlaceBookModels.Interface;

namespace Models.PlaceBookModels
{
   public class PlaceImages : ObjectImage
    {
        public int PlaceImagesID { get; set; }
        public int PlaceID { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
        public string FileName { get; set; }
    }
}
