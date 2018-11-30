using DAL;
using DAL.BL;
using DAL.Interface;
using FlightControl.Core.Emitters;
using FlightControl.Core.Hubs;
using FlightControl.Core.Interfaces;
using FlightTerminalDb;
using FlightTerminalDb.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace FlightControl.Core
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<DbManager>();

            services.AddSingleton(Configuration);

            services.AddSingleton<ITerminalContext, TerminalContext>();//Add Flight manager as singelton
            services.AddSingleton<ITerminalEmitter, TerminalEmitter>();

            services.AddCors(o => o.AddPolicy("CorsPolicy", builder => {
                builder
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowAnyOrigin()
                .AllowCredentials()
                //.WithOrigins("http://localhost:4200")
                //.WithOrigins("http://localhost:4300")
                ;
            }));
            services.AddSignalR();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            app.UseCors("CorsPolicy");
            app.UseSignalR(routes =>
            {
                routes.MapHub<TerminalHub>("/terminal");
            });

            app.UseMvc();
        }
    }
}
