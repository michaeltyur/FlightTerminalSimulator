using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace Models.PlaceBookModels
{
    public class ImagesRequest
    {
        public int ParentID { get; set; }
        public string ParentName { get; set; }
        public List <IFormFile> Files { get; set; }
    }
}
