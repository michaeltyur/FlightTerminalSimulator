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
using Models.PlaceBookModels.Interface;

namespace FlightControl.Core.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaceBookController : ControllerBase
    {
        //private const string CONNECTION_DB_STRING = "Data Source=SQL5052.site4now.net;Initial Catalog=DB_A4A6EE_map;User Id=DB_A4A6EE_map_admin;Password=1950t03b03;";
        public IConfiguration Configuration { get; }
        private PlaceBookHelper placeBookHelper;
        private const string fileDirectoryPath = @"Images\PlaceBookImages";
        private readonly string connectionString;
        public PlaceBookController(IConfiguration configuration)
        {
            Configuration = configuration;
            connectionString = Configuration["ConnectionStrings:MapDBConnection"];
            placeBookHelper = new PlaceBookHelper(connectionString);
        }

        #region Place

        [HttpGet("GetAllPlaces")]
        public List<Place> GetAllPlaces()
        {
            try
            {
                return placeBookHelper.GetAllPlaces();
            }
            catch (Exception ex)
            {
                ErrorLog errorLog = new ErrorLog { Title = "Get All Place", Description = ex.ToString() };
                placeBookHelper.WriteErrorLog(errorLog);
                throw ex;
            }
        }

        [HttpPost("AddPlace")]
        public ServerResponse AddPlace(Place place)
        {
            try
            {
                ServerResponse serverResponse = new ServerResponse();

                if (placeBookHelper.IsPlaceExist(place.Name))
                {
                    serverResponse.Error = "Name already exists";
                    return serverResponse;
                }

                serverResponse.ID = placeBookHelper.AddPlace(place);
                if (serverResponse.ID > 0)
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
                ErrorLog errorLog = new ErrorLog { Title = "Update Place", Description = ex.ToString() };
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
                if (placeID > 0)
                {
                    bool result = placeBookHelper.DeletePlace(placeID);
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

        #region Book

        [HttpGet("GetAllBooks")]
        public List<Book> GetAllBooks()
        {
            try
            {
                return placeBookHelper.GetAllBooks();
            }
            catch (Exception ex)
            {
                ErrorLog errorLog = new ErrorLog { Title = "Get All Book", Description = ex.ToString() };
                placeBookHelper.WriteErrorLog(errorLog);
                throw ex;
            }
        }

        [HttpPost("AddBook")]
        public ServerResponse AddBook(Book book)
        {
            try
            {
                ServerResponse serverResponse = new ServerResponse();

                if (placeBookHelper.IsBookExist(book.Name))
                {
                    serverResponse.Error = "Name already exists";
                    return serverResponse;
                }

                serverResponse.ID = placeBookHelper.AddBook(book);

                return serverResponse;
            }
            catch (Exception ex)
            {
                ErrorLog errorLog = new ErrorLog { Title = "Add Book", Description = ex.ToString() };
                placeBookHelper.WriteErrorLog(errorLog);
                throw ex;
            }
        }

        [HttpPost("UpdateBook")]
        public ServerResponse UpdateBook(Book book)
        {
            try
            {
                ServerResponse serverResponse = new ServerResponse();

                bool result = placeBookHelper.UpdateBook(book);
                if (result)
                {
                    serverResponse.Message = "Book updated";
                }
                else
                {
                    serverResponse.Error = "Error during updating book";
                }

                return serverResponse;
            }
            catch (Exception ex)
            {

                ErrorLog errorLog = new ErrorLog { Title = "Update Book", Description = ex.ToString() };
                placeBookHelper.WriteErrorLog(errorLog);
                throw ex;
            }
        }

        [HttpGet("DeleteBook")]
        public ServerResponse DeleteBook(int bookID)
        {
            try
            {
                ServerResponse serverResponse = new ServerResponse();
                if (bookID > 0)
                {
                    bool result = placeBookHelper.DeleteBook(bookID);
                    if (result)
                    {
                        serverResponse.Message = "The book deleted";
                    }
                    else
                    {
                        serverResponse.Error = "error during delete";
                    }
                }
                else
                {
                    serverResponse.Error = "bookID is incorrect";
                }
                return serverResponse;
            }
            catch (Exception ex)
            {

                ErrorLog errorLog = new ErrorLog { Title = "Delete Book", Description = ex.ToString() };
                placeBookHelper.WriteErrorLog(errorLog);
                throw ex;
            }

        }
        #endregion

        #region File
        [HttpPost("UploadFiles")]
        public async Task<ServerResponse> UploadFiles([FromForm]ImagesRequest imagesRequest)
        {
            string serverDirectory = @"https://live-project.space/Images/PlaceBookImages/";
            ServerResponse serverResponse = new ServerResponse();
            int parentID = imagesRequest.ParentID;
            string parentName = imagesRequest.ParentName;
            List<IFormFile> files = imagesRequest.Files;
            string parentType = imagesRequest.ParentType;

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
                    int imageID = 0;
                    if (parentType == ParentType.place.ToString())
                    {
                        PlaceImages placeImages = new PlaceImages
                        {
                            PlaceID = parentID,
                            Name = parentName,
                            ImagePath = serverDirectory + fullFileName,
                            FileName = fullFileName
                        };

                        imageID = placeBookHelper.InsertPlaceImage(placeImages);

                        if (imageID > 0)
                        {
                            placeImages.PlaceImagesID = imageID;
                        }
                    }
                    else if (parentType == ParentType.book.ToString())
                    {
                        BookImages bookImages = new BookImages
                        {
                            BookID = parentID,
                            Name = parentName,
                            ImagePath = serverDirectory + fullFileName,
                            FileName = fullFileName
                        };

                        imageID = placeBookHelper.InsertBookImage(bookImages);
                        if (imageID > 0)
                        {
                            bookImages.BookImagesID = imageID;

                        }
                    }

                    if (imageID > 0)
                    {
                        numberOfUploadedFiles++;
                    }
                    else
                    {
                        placeBookHelper.DeleteFileLocal(fullFileName);
                    }


                }
                catch (Exception ex)
                {
                    ErrorLog errorLog = new ErrorLog { Title = "Upload file error", Description = ex.ToString() };
                    placeBookHelper.WriteErrorLog(errorLog);
                }
            }

            serverResponse.ImagesData = (parentType == ParentType.place.ToString())
                ? placeBookHelper.GetPlaceImagesByParentID(parentID)
                : placeBookHelper.GetBookImagesByParentID(parentID);

            serverResponse.Message = $"{numberOfUploadedFiles} files uploaded";
            return serverResponse;
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

        [HttpGet("DeleteImageFile")]
        public bool DeleteImageFile(int imageID, ParentType parentType)
        {
            try
            {
                string filePath = default;

                filePath = placeBookHelper.DeleteFileFromDB(imageID, parentType);
                if (!string.IsNullOrEmpty(filePath))
                {
                    placeBookHelper.DeleteFileLocal(filePath);
                    return true;
                }
                else
                {
                    return false;
                }

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        #endregion

        #region Images
        [HttpGet("GetPlaceImagesByParentID")]
        public List<ObjectImage> GetPlaceImagesByParentID(int parentID)
        {
            try
            {
                return placeBookHelper.GetPlaceImagesByParentID(parentID);
            }
            catch (Exception ex)
            {
                ErrorLog errorLog = new ErrorLog { Title = "Get All PlaceImages By ID", Description = ex.ToString() };
                placeBookHelper.WriteErrorLog(errorLog);
                throw ex;
            }
        }
        [HttpGet("GetBookImagesByParentID")]
        public List<ObjectImage> GetBookImagesByParentID(int parentID)
        {
            try
            {
                return placeBookHelper.GetBookImagesByParentID(parentID);
            }
            catch (Exception ex)
            {
                ErrorLog errorLog = new ErrorLog { Title = "Get All BookImages By ID", Description = ex.ToString() };
                placeBookHelper.WriteErrorLog(errorLog);
                throw ex;
            }
        }

        [HttpGet("GetRandomPlaceImages")]
        public List<PlaceImages> GetRandomPlaceImages()
        {
            try
            {
                return placeBookHelper.GetRandomPlaceImages();
            }
            catch (Exception ex)
            {
                ErrorLog errorLog = new ErrorLog { Title = "Get Random PlaceImages", Description = ex.ToString() };
                placeBookHelper.WriteErrorLog(errorLog);
                throw ex;
            }
        }

        #endregion


    }
}