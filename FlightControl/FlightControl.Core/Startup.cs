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
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using System;
using System.IO;


namespace FlightControl.Core
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        readonly string CorsPolicy = "CorsPolicy";

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddSingleton<DbManager>();

            services.AddSingleton(Configuration);

            services.AddSingleton<ITerminalContext, TerminalContext>();//Add Flight manager as singelton
            services.AddSingleton<ITerminalEmitter, TerminalEmitter>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            // Place Map/Book Project
            services.AddSingleton<IFileProvider>(
            new PhysicalFileProvider(
                Path.Combine(Directory.GetCurrentDirectory(), "Images/PlaceBookImages")));

            services.AddCors(o => o.AddPolicy(CorsPolicy, builder => {
                builder
                .WithOrigins("https://flight-terminal-receiver.firebaseapp.com")
                .WithOrigins("http://michaelt-001-site1.btempurl.com")
                //.WithOrigins("http://localhost:4300")
                //.WithOrigins("http://localhost:4200")
                .WithOrigins("http://michaelt-001-site2.btempurl.com")
                .WithOrigins("https://live-project.space")
                .WithOrigins("https://tedious-literature.firebaseapp.com")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
               // .AllowAnyOrigin()
                ;
            }));
            services.AddSignalR(hubOptions =>
            {
                hubOptions.EnableDetailedErrors = true;
              //  hubOptions.KeepAliveInterval = TimeSpan.FromMinutes(20);
            }
            );

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            // In production, the Angular files will be served from this directory
            //services.AddSpaStaticFiles(configuration =>
            //{
            //    configuration.RootPath = "wwwroot";
            //});

            //services.Configure<IISServerOptions>(options =>
            //{
            //    options.AutomaticAuthentication = false;
            //});

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseStaticFiles();

            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Images", @"PlaceBookImages")),
                RequestPath = new PathString("/Images/PlaceBookImages")
            });


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            app.UseCors(CorsPolicy);

            app.UseSignalR(routes =>
            {
                routes.MapHub<TerminalHub>("/terminal");
            });

            app.UseMvc();
            // app.UseSpaStaticFiles();
            //    app.UseSpa(spa =>
            //    {
            //        // To learn more about options for serving an Angular SPA from ASP.NET Core,
            //        // see https://go.microsoft.com/fwlink/?linkid=864501

            //        spa.Options.SourcePath = "wwwroot";

            //        if (env.IsDevelopment())
            //        {
            //            spa.UseAngularCliServer(npmScript: "start");
            //        }
            //    });
            DefaultFilesOptions options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("index.html");
            app.UseDefaultFiles(options);
            app.UseStaticFiles();
        }
    }
}
