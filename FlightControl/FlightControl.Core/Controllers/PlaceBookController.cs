using System;
using System.Collections.Generic;
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
        public PlaceBookController(IConfiguration configuration)
        {
            Configuration = configuration;
            placeBookHelper = new PlaceBookHelper();
        }
        [HttpPost("AddPlace")]
        public ServerResponse AddPlace(Place place)
        {
            try
            {
                string connectionString = Configuration["ConnectionStrings:MapDBConnection"];
                ServerResponse serverResponse = new ServerResponse();

                string sql = "Insert Into Place (Name ";
                if (!string.IsNullOrEmpty(place.Text)) sql += ", Text ";
                if (place.Latitude > 0) sql += ", Latitude ";
                if (place.Longitude > 0) sql += ",Longitude ";
                if (place.Zoom > 0) sql += ", Zoom ";
                sql += $") OUTPUT INSERTED.PlaceID Values ('{place.Name}' ";
                if (!string.IsNullOrEmpty(place.Text)) sql += $", '{place.Text}' ";
                if (place.Latitude > 0) sql += $", '{place.Latitude}' ";
                if (place.Longitude > 0) sql += $", '{place.Longitude} ";
                if (place.Zoom > 0) sql += $", '{place.Zoom}'";
                sql += ") ";

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        connection.Open();

                        serverResponse.ID = (int)command.ExecuteScalar();

                        connection.Close();
                    }
                }

                return serverResponse;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost("AddBook")]
        public ServerResponse AddBook(Book book)
        {
            try
            {
                string connectionString = Configuration["ConnectionStrings:MapDBConnection"];
                ServerResponse serverResponse = new ServerResponse();

                string sql = "Insert Into Book (Name ";
                if (!string.IsNullOrEmpty(book.Autor)) sql += ", Autor ";
                if (!string.IsNullOrEmpty(book.Text)) sql += ", Text ";
                sql += $") OUTPUT INSERTED.BookID Values ('{book.Name}' ";
                if (!string.IsNullOrEmpty(book.Autor)) sql += $", '{book.Autor}' ";
                if (!string.IsNullOrEmpty(book.Text)) sql += $", '{book.Text}' ";
                sql += ") ";

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        connection.Open();

                        serverResponse.ID = (int)command.ExecuteScalar();

                        connection.Close();
                    }
                }

                return serverResponse;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        [HttpPost("UploadFile")]
        public async Task<ServerResponse> UploadFile(List<IFormFile> files)
        {
            int numberOfUploadedFiles = 0;

            if(files.Count == 0) return new ServerResponse { Error = "files not selected" };

            foreach (var file in files)
            {
                try
                {
                    if (file == null || file.Length == 0)
                        return new ServerResponse { Error = "file not selected" };

                    var path = Path.Combine(
                                Directory.GetCurrentDirectory(), fileDirectoryPath,
                                file.FileName);

                    using (var stream = new FileStream(path, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }

                    numberOfUploadedFiles++;

                }
                catch (Exception ex)
                {
                    ErrorLog errorLog = new ErrorLog { Title = "Upload file error", Description = ex.ToString() };
                    WriteErrorLog(errorLog);
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

        private int WriteErrorLog(ErrorLog errorLog)
        {
            try
            {
                string connectionString = Configuration["ConnectionStrings:MapDBConnection"];
                int id = 0;
                string sql = $"INSERT INTO ErrorLog (Title,[Description]) OUTPUT INSERTED.ErrorLogID VALUES('{errorLog.Title}','{errorLog.Description}')";
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        connection.Open();

                        id = (int)command.ExecuteScalar();

                        connection.Close();
                    }
                }
                return id;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

    }
}