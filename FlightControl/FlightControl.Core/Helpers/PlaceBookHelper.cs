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

        public List<Place> GetAllPlaces()
        {
            List<Place> list = new List<Place>();
            string sql = $"SELECT * FROM DBO.Place ORDER BY Name";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    connection.Open();

                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        Place place = new Place();
                        place.PlaceID = (int)reader["PlaceID"];
                        place.Name = reader["Name"].ToString();
                        place.Comment = reader["Comment"] != DBNull.Value ? reader["Comment"].ToString() : default;
                        place.Text = reader["Text"] != DBNull.Value ? reader["Text"].ToString() : default;
                        place.Latitude = reader["Latitude"] != DBNull.Value ? (decimal)reader["Latitude"] : default;
                        place.Longitude = reader["Longitude"] != DBNull.Value ? (decimal)reader["Longitude"] : default;
                        place.Zoom = reader["Zoom"] != DBNull.Value ? (int)reader["Zoom"] : default;

                        list.Add(place);
                    }

                    connection.Close();
                }
            }
            return list;
        }

        public int AddPlace(Place place)
        {
            int id = 0;
            string sql ="Insert Into Place (Name ";
            if (!string.IsNullOrEmpty(place.Comment)) sql += ", Comment ";
            if (!string.IsNullOrEmpty(place.Text)) sql += ", Text ";
            if (place.Latitude > 0) sql += ", Latitude ";
            if (place.Longitude > 0) sql += ",Longitude ";
            if (place.Zoom > 0) sql += ", Zoom ";
            sql += $") OUTPUT INSERTED.PlaceID Values (N'{place.Name}' ";
            if (!string.IsNullOrEmpty(place.Comment)) sql += $", N'{place.Comment}' ";
            if (!string.IsNullOrEmpty(place.Text)) sql += $", N'{place.Text}' ";
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
            string sql = $" UPDATE dbo.Place SET Name = N'{place.Name}' ";
            if (!string.IsNullOrEmpty(place.Comment)) sql += $", Text = N'{place.Comment}' ";
            if (!string.IsNullOrEmpty(place.Text)) sql += $", Text = N'{place.Text}' ";
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

        public bool DeletePlace(int placeID)
        {
            bool result = true;
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

                    connection.Close();
                }
            }

            foreach (var fileName in fileNames)
            {
                DeleteFileLocal(fileName);
            }

            return result;
        }

        public bool IsPlaceExist(string name)
        {
            bool result = false;
            string sql = "IsPlaceNameExists";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.CommandType = CommandType.StoredProcedure;

                    command.Parameters.AddWithValue("@Name", name);

                    connection.Open();

                    result = (bool)command.ExecuteScalar();

                    connection.Close();
                }
            }
            return result;
        }
        #endregion

        #region Book
        public int AddBook(Book book)
        {
            int id = 0;
            string sql = "Insert Into Book (Name ";
            if (!string.IsNullOrEmpty(book.Autor)) sql += ", Autor ";
            if (!string.IsNullOrEmpty(book.Text)) sql += ", Text ";
            sql += $") OUTPUT INSERTED.BookID Values ( N'{book.Name}' ";
            if (!string.IsNullOrEmpty(book.Autor)) sql += $", N'{book.Autor}' ";
            if (!string.IsNullOrEmpty(book.Text)) sql += $", N'{book.Text}' ";
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

        public bool UpdateBook(Book book)
        {
            int rows = 0;
            string sql = $"UPDATE dbo.Book SET Name = N'{book.Name}' ";
            if (!string.IsNullOrEmpty(book.Autor)) sql += $", Autor = N'{book.Autor}' ";
            if (!string.IsNullOrEmpty(book.Text)) sql += $", Text = N'{book.Text}' ";
            sql += $" WHERE BookID = '{book.BookID}' ";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    connection.Open();

                    rows = command.ExecuteNonQuery();

                    connection.Close();
                }
            }
            return rows > 0;
        }

        public List<Book> GetAllBooks()
        {
            List<Book> list = new List<Book>();
            string sql = $"SELECT * FROM DBO.Book ORDER BY Name";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    connection.Open();

                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        Book book = new Book();
                        book.BookID = (int)reader["BookID"];
                        book.Name = reader["Name"].ToString();
                        book.Autor = reader["Autor"] != DBNull.Value ? reader["Autor"].ToString() : default;
                        book.Text = reader["Text"] != DBNull.Value ? reader["Text"].ToString() : default;
                        list.Add(book);
                    }

                    connection.Close();
                }
            }
            return list;
        }

        public bool DeleteBook(int bookID)
        {
            bool result = true;
            string sql = "DeletePlaceByID";
            List<string> fileNames = new List<string>();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@BookID", bookID);
                    connection.Open();

                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        fileNames.Add(reader.GetString(0));
                    }

                    connection.Close();
                }
            }

            foreach (var fileName in fileNames)
            {
                DeleteFileLocal(fileName);
            }

            return result;
        }

        public bool IsBookExist(string name)
        {
            bool result = false;
            string sql = "IsBookNameExists";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.CommandType = CommandType.StoredProcedure;

                    command.Parameters.AddWithValue("@Name", name);

                    connection.Open();

                    result = (bool)command.ExecuteScalar();

                    connection.Close();
                }
            }
            return result;
        }
        #endregion

        #region Place Image
        public List<PlaceImages> GetPlaceImagesByParentID(int parentID)
        {
            List<PlaceImages> images = new List<PlaceImages>();
            string sql = $"SELECT * FROM PlaceImages WHERE PlaceID = '{parentID}' ";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    connection.Open();

                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        PlaceImages image = new PlaceImages();
                        image.PlaceImagesID = (int)reader["PlaceImagesID"];
                        image.PlaceID = (int)reader["PlaceID"];
                        image.Name = DBNull.Value != reader["Name"] ? reader["Name"].ToString() : default;
                        image.ImagePath = DBNull.Value != reader["ImagePath"] ? reader["ImagePath"].ToString() : default;
                        image.FileName = DBNull.Value != reader["FileName"] ? reader["FileName"].ToString() : default;
                    }

                    connection.Close();
                }
            }
            return images;
        }
        public int InsertPlaceImage(PlaceImages placeImage)
        {
            try
            {
                int id = 0;
                string sql = $"INSERT INTO PlaceImages ( PlaceID, Name, ImagePath, FileName ) OUTPUT INSERTED.PlaceImagesID VALUES('{placeImage.PlaceID}', N'{placeImage.Name}', N'{placeImage.ImagePath}', N'{placeImage.FileName}')";
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
        public List<BookImages> GetBookImagesByParentID(int parentID)
        {
            List<BookImages> images = new List<BookImages>();
            string sql = $"SELECT * FROM dbo.BookImages WHERE PlaceID = '{parentID}' ";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    connection.Open();

                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        BookImages image = new BookImages();
                        image.BookImagesID = (int)reader["BookImagesID"];
                        image.BookID = (int)reader["BookID"];
                        image.Name = DBNull.Value != reader["Name"] ? reader["Name"].ToString() : default;
                        image.ImagePath = DBNull.Value != reader["ImagePath"] ? reader["ImagePath"].ToString() : default;
                        image.FileName = DBNull.Value != reader["FileName"] ? reader["FileName"].ToString() : default;
                    }

                    connection.Close();
                }
            }
            return images;
        }
        public int InsertBookImage(BookImages bookImage)
        {
            try
            {
                int id = 0;
                string sql = $"INSERT INTO BookImages ( BookID, Name, ImagePath, FileName ) OUTPUT INSERTED.BookImagesID VALUES('{bookImage.BookID}', N'{bookImage.Name}', N'{bookImage.ImagePath}', N'{bookImage.FileName}')";
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
    }

}
