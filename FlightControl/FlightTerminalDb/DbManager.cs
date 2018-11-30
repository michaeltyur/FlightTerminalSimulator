using FlightTerminalDb.Interfaces;
using FlightTerminalDb.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlightTerminalDb
{
   public class DbManager : IDbManager     
    {
        public static readonly object WriteReadLock = new object();

        private TerminalContextDb _terminalContextDb;

        private FlightRepository _flightRepository;
        public FlightRepository FlightRepository
        {
            get
            {
                return _flightRepository ?? new FlightRepository(_terminalContextDb);
            } 
        }
        private LogMsgRepository _logMsgRepository;
        public LogMsgRepository LogMsgRepository
        {
            get
            {
                return _logMsgRepository ?? new LogMsgRepository(_terminalContextDb);
            }
        }

        public DbManager()
        {
            var optionsBuilder = new DbContextOptionsBuilder<TerminalContextDb>();

            optionsBuilder.UseSqlServer(DBGlobals.StringConnection);

            _terminalContextDb = new TerminalContextDb(optionsBuilder.Options);

            _terminalContextDb.Database.EnsureCreated();

        }

        public void Save()
        {
            _terminalContextDb.SaveChanges();
        }

        public void Dispose()
        {
            _terminalContextDb.Dispose();
        }
    }
}
