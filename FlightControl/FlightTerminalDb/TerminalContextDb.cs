using Models.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using System;
using System.Configuration;
using FlightTerminalDb.Interfaces;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace FlightTerminalDb
{
    public class TerminalContextDb : DbContext
    {

        public TerminalContextDb(DbContextOptions<TerminalContextDb> options) : base(options)
        {

        }

        public DbSet<Flight> Flights { get; set; }

        public DbSet<LogMsg> LogMsgs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connection = DBGlobals.StringConnection;

            optionsBuilder.UseSqlServer(connection);
        }

    }

}
    

