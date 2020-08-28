using Models.PlaceBookModels;
using Models.PlaceBookModels.Interface;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Interfaces
{
    public interface IPlaceBookHelper
    {
        string GetContentType(string path);
        string DeleteFileFromDB(int id, ParentType parentType);
        bool DeleteFileLocal(string fileName);
        int WriteErrorLog(ErrorLog errorLog);
        #region Place
        List<Place> GetAllPlaces();
        int AddPlace(Place place);
        bool UpdatePlace(Place place);
        bool DeletePlace(int placeID);
        bool IsPlaceExist(string name);
        #endregion

        #region Book
        int AddBook(Book book);
        bool UpdateBook(Book book);
        List<Book> GetAllBooks();
        bool DeleteBook(int bookID);
        bool IsBookExist(string name);
        #endregion

        #region Place Image
        List<ObjectImage> GetPlaceImagesByParentID(int parentID);
        int InsertPlaceImage(PlaceImages placeImage);
        List<PlaceImages> GetRandomPlaceImages();
        #endregion

        #region Book Image
        List<ObjectImage> GetBookImagesByParentID(int parentID);
        int InsertBookImage(BookImages bookImage);
        #endregion

    }
}
