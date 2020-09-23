using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace hw_5_18_PeopleCars.Data
{
    public class PCContextFactory : IDesignTimeDbContextFactory<PCContext>
    {
        public PCContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}hw 5-18 PeopleCars.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new PCContext(config.GetConnectionString("ConStr"));
        }
    }
}
