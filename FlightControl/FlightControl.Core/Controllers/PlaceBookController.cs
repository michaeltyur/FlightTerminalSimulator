using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using FlightControl.Core.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Models.PlaceBookModels;

namespace FlightControl.Core.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaceBookController : ControllerBase
    {
        //private const string CONNECTION_DB_STRING = "Data Source=SQL5052.site4now.net;Initial Catalog=DB_A4A6EE_map;User Id=DB_A4A6EE_map_admin;Password=1950t03b03;";
        public IConfiguration Configuration { get; }
        private PlaceBookHelper placeBookHelper;
        private const string fileDirectoryPath = "Images/PlaceBookImages";
        private readonly string connectionString;
        public PlaceBookController(IConfiguration configuration)
        {
            Configuration = configuration;
            connectionString = Configuration["ConnectionStrings:MapDBConnection"];
            placeBookHelper = new PlaceBookHelper(connectionString);
        }

        #region Place
        [HttpPost("AddPlace")]
        public ServerResponse AddPlace(Place place)
        {
            try
            {
                ServerResponse serverResponse = new ServerResponse();

                serverResponse.ID = placeBookHelper.AddPlace(place);
                if (serverResponse.ID>0)
                {
                    serverResponse.Message = "Place added successfully";
                }

                return serverResponse;
            }
            catch (Exception ex)
            {
                ErrorLog errorLog = new ErrorLog { Title = "Add Place", Description = ex.ToString() };
                placeBookHelper.WriteErrorLog(errorLog);
                throw ex;
            }
        }

        [HttpPost("UpdatePlace")]
        public ServerResponse UpdatePlace(Place place)
        {
            try
            {
                ServerResponse serverResponse = new ServerResponse();

                bool result = placeBookHelper.UpdatePlace(place);

                if (result)
                {
                    serverResponse.Message = "Place updated";
                }
                else
                {
                    serverResponse.Error = "Error update place";
                }

                return serverResponse;
            }
            catch (Exception ex)
            {
                ErrorLog errorLog = new ErrorLog {Title="Update Place",Description = ex.ToString() };
                placeBookHelper.WriteErrorLog(errorLog);
                throw ex;
            }
        }

        [HttpGet("DeletePlace")]
        public ServerResponse DeletePlace(int placeID)
        {
            try
            {
                ServerResponse serverResponse = new ServerResponse();
                if (placeID>0)
                {
                   bool result =  placeBookHelper.DeletePlace(placeID);
                    if (result)
                    {
                        serverResponse.Message = "The place deleted";
                    }
                    else
                    {
                        serverResponse.Error = "error during delete";
                    }
                }
                else
                {
                    serverResponse.Error = "placeID is incorrect";
                }
                return serverResponse;
            }
            catch (Exception ex)
            {

                ErrorLog errorLog = new ErrorLog { Title = "Delete Place", Description = ex.ToString() };
                placeBookHelper.WriteErrorLog(errorLog);
                throw ex;
            }

        }
        #endregion

        [HttpPost("AddBook")]
        public ServerResponse AddBook(Book book)
        {
            try
            {
                ServerResponse serverResponse = new ServerResponse();

                serverResponse.ID = placeBookHelper.AddBook(book);

                return serverResponse;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        [HttpPost("UploadFiles")]
        public async Task<ServerResponse> UploadFiles([FromForm]ImagesRequest imagesRequest)
        {
            int parentID = imagesRequest.ParentID;
            string parentName = imagesRequest.ParentName;
            List<IFormFile> files = imagesRequest.Files;

            int numberOfUploadedFiles = 0;

            if (files == null) return new ServerResponse { Error = "files are null" };
            if (files.Count == 0) return new ServerResponse { Error = "files not selected" };

            foreach (var file in files)
            {
                try
                {
                    string fullFileName = $"{parentName}_{parentID}_{DateTime.Now.Ticks}_{file.FileName}";

                    if (file == null || file.Length == 0)
                        // return new ServerResponse { Error = "file not selected" };
                        continue;

                    var path = Path.Combine(
                                Directory.GetCurrentDirectory(), fileDirectoryPath,
                                fullFileName);

                    using (var stream = new FileStream(path, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }


                    PlaceImages placeImages = new PlaceImages
                    {
                        PlaceID = parentID,
                        Name = parentName,
                        ImagePath = path,
                        FileName = fullFileName
                    };

                    int placeImageID = placeBookHelper.InsertPlaceImage(placeImages);

                    if (placeImageID > 0)
                    {
                        numberOfUploadedFiles++;
                    }


                }
                catch (Exception ex)
                {
                    ErrorLog errorLog = new ErrorLog { Title = "Upload file error", Description = ex.ToString() };
                    placeBookHelper.WriteErrorLog(errorLog);
                }
            }

            return new ServerResponse { Message = $"{numberOfUploadedFiles} files uploaded" };
        }

        [HttpPost("DownloadFile")]
        public async Task<IActionResult> Download(string filename)
        {
            if (filename == null)
                return Content("filename not present");

            var path = Path.Combine(
                           Directory.GetCurrentDirectory(),
                           fileDirectoryPath, filename);

            var memory = new MemoryStream();
            using (var stream = new FileStream(path, FileMode.Open))
            {
                await stream.CopyToAsync(memory);
            }
            memory.Position = 0;
            return File(memory, placeBookHelper.GetContentType(path), Path.GetFileName(path));
        }

        [HttpPost("DeletePlaceFiles")]
        public int DeletePlaceFiles(List<PlaceImages> placeImages)
        {
            try
            {
                int numberRemoved = 0;
                
                foreach (var file in placeImages)
                {
                

                }
                return numberRemoved;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

 

    }
}