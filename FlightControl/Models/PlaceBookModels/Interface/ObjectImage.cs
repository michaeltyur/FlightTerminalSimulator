using System;
using System.Collections.Generic;
using System.Text;

namespace Models.PlaceBookModels.Interface
{
   public interface ObjectImage
    {
         string Name { get; set; }
         string ImagePath { get; set; }
         string FileName { get; set; }
    }
}
