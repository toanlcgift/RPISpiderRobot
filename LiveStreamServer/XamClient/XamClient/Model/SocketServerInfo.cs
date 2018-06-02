using System;
using System.Collections.Generic;
using System.Text;

namespace XamClient.Model
{
    public class SocketServerInfo
    {
        [SQLite.PrimaryKey, SQLite.AutoIncrement]
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsSelected { get; set; }
    }
}
