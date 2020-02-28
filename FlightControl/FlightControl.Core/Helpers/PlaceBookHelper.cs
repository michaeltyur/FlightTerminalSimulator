using Models.PlaceBookModels;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FlightControl.Core.Helpers
{
    public class PlaceBookHelper
    {
        private readonly string connectionString;
        public PlaceBookHelper(string connectionString)
        {
            this.connectionString = connectionString;
        }
        public string GetContentType(string path)
        {
            var types = GetMimeTypes();
            var ext = Path.GetExtension(path).ToLowerInvariant();
            return types[ext];
        }

        private Dictionary<string, string> GetMimeTypes()
        {
            return new Dictionary<string, string>
            {
                {".txt", "text/plain"},
                {".pdf", "application/pdf"},
                {".doc", "application/vnd.ms-word"},
                {".docx", "application/vnd.ms-word"},
                {".xls", "application/vnd.ms-excel"},
                {".xlsx", "application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet"},
                {".png", "image/png"},
                {".jpg", "image/jpeg"},
                {".jpeg", "image/jpeg"},
                {".gif", "image/gif"},
                {".csv", "text/csv"}
            };
        }
        public string DeleteFileFromDB(int id)
        {
            string fileName = string.Empty;
            string sql = $"PlaceImagesDelete";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    connection.Open();

                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@PlaceImagesID", id);
                    fileName = command.ExecuteScalar().ToString();
                    connection.Close();
                }
            }
            return fileName;
        }

        public bool DeleteFileLocal(string fileName)
        {
            string fileDyrectory = "Images/PlaceBookImages/";
            if (System.IO.File.Exists(fileDyrectory + fileName))
            {
                System.IO.File.Delete(Path.Combine(fileDyrectory + fileName));
            }
            return true;
        }

        public int WriteErrorLog(ErrorLog errorLog)
        {
            try
            {
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


        #region Place
        public int AddPlace(Place place)
        {
            int id = 0;
            string sql = "Insert Into Place (Name ";
            if (!string.IsNullOrEmpty(place.Text)) sql += ", Text ";
            if (place.Latitude > 0) sql += ", Latitude ";
            if (place.Longitude > 0) sql += ",Longitude ";
            if (place.Zoom > 0) sql += ", Zoom ";
            sql += $") OUTPUT INSERTED.PlaceID Values ('{place.Name}' ";
            if (!string.IsNullOrEmpty(place.Text)) sql += $", '{place.Text}' ";
            if (place.Latitude > 0) sql += $", '{place.Latitude}' ";
            if (place.Longitude > 0) sql += $", '{place.Longitude}' ";
            if (place.Zoom > 0) sql += $", '{place.Zoom}' ";
            sql += ") ";

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

        public bool UpdatePlace(Place place)
        {
            int result = 0;
            string sql = $" UPDATE dbo.Place SET Name = '{place.Name}' ";
            if (!string.IsNullOrEmpty(place.Text)) sql += $", Text = '{place.Text}' ";
            if (place.Latitude > 0) sql += $", Latitude = '{place.Latitude}' ";
            if (place.Longitude > 0) sql += $" , Longitude = '{place.Longitude}' ";
            if (place.Zoom > 0) sql += $", Zoom = '{place.Zoom}' ";
            sql += $" WHERE PlaceID = '{place.PlaceID}' ";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    connection.Open();

                    result = (int)command.ExecuteNonQuery();

                    connection.Close();
                }
            }
            return result > 0;

        }

        /// <summary>
        /// Delete Place by ID
        /// </summary>
        /// <param name="placeID">Place ID</param>
        /// <returns>result of action</returns>
        public bool DeletePlace(int placeID)
        {
            int result = 0;
            string sql = "DeletePlaceByID";
            List<string> fileNames = new List<string>();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@PlaceID", placeID);
                    connection.Open();

                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        fileNames.Add(reader.GetString(0));
                    }

                     result = (int)command.Parameters["@PlaceID"].Value;

                    connection.Close();
                }
            }

            foreach (var fileName in fileNames)
            {
                DeleteFileLocal(fileName);
            }

            return result > 0;
        }
        #endregion

        #region Book
        public int AddBook(Book book)
        {
            int id = 0;
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

                    id = (int)command.ExecuteScalar();

                    connection.Close();
                }
            }
            return id;
        }
        #endregion

        #region Place Image
        public int InsertPlaceImage(PlaceImages placeImage)
        {
            try
            {
                int id = 0;
                string sql = $"INSERT INTO PlaceImages ( PlaceID, Name, ImagePath, FileName ) OUTPUT INSERTED.PlaceImagesID VALUES('{placeImage.PlaceID}','{placeImage.Name}','{placeImage.ImagePath}','{placeImage.FileName}')";
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
        #endregion

        #region Book Image
        #endregion
    }

}
