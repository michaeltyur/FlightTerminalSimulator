
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models.Interface;

namespace FlightControl.Core.Helpers
{
    public class StringHelper : IStringHelper
    {
        public IConfiguration Configuration { get; }
        public string SiteHostingAddress { get; set; }
        public StringHelper(IConfiguration configuration)
        {
            Configuration = configuration;
            SiteHostingAddress = Configuration["CustomData:SiteHostingAddress"];
        }
        public string GetActualImagePath(string path)
        {
            if (string.IsNullOrEmpty(path))
            {
                return path;
            }

            string result = default;
            //int index = path.IndexOf("//") + 2;
            //result = path.Substring(index);
            //index = result.IndexOf("/");
            //result = result.Substring(index);
            //result = SiteHostingAddress + result;
            result = path.Replace("*", SiteHostingAddress);
            return result;
        }
        private string GetShortSiteHostingAddress(string fullAddress)
        {
            int index = fullAddress.IndexOf("//") + 2;
            string result = fullAddress.Substring(index);
            return result;
        }
    }
}
