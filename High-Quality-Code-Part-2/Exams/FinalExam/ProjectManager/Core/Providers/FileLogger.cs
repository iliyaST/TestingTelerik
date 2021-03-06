﻿using log4net;
using ProjectManager.CLI.Core.Contracts;

namespace ProjectManager.CLI.Core.Providers
{
    public class FileLogger : IFileLogger
    {
        private ILog log;

        public FileLogger()
        {
            this.log = LogManager.GetLogger(typeof(FileLogger));
        }

        public void Info(string message)
        {
            this.log.Info(message);
        }

        public void Error(string message)
        {
            this.log.Error(message);
        }

        public void Fatal(string message)
        {
            this.log.Fatal(message);
        }
    }
}
