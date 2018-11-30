using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Models
{
    public class Message:BaseEntity
    {
        public string Type { get; set; }
        public string Content { get; set; }
    }
}
