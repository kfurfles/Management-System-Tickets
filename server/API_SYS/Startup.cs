using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Swagger;
using API_SYS.Models;
using API_SYS.ViewModels;
using Microsoft.EntityFrameworkCore;
using API_SYS.Mappers;

namespace API_SYS
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
            // windows
            //services.AddDbContext<apiContext>(option => option.UseMySQL("server=localhost;port=3306;user=root;password=1234;database=api"));

            //mac
            //if (!env.IsDevelopment())
            //{
                 services.AddDbContext<apiContext>(option => option.UseMySQL("server=localhost;port=3306;user=root;password=;database=api"));
                //services.AddDbContext<apiContext>(option => option.UseMySQL(Configuration.GetConnectionString("API_SYSContext")));
            //}
            //else
            //{
              //services.AddDbContext<apiContext>(option => option.UseMySQL("server=18.213.1.255;port=3306;user=root;password=12Kelvin34;database=api"));
            //}

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });
            services.AddMvc();

            services.AddSwaggerGen(c => {

                c.SwaggerDoc("v1",
                    new Info
                    {
                        Title = "System Ticket APi",
                        Version = "v1",
                        Description = "API REST criada com o ASP.NET Core 2.0 para a sistema de chamados",
                        Contact = new Contact
                        {
                            Name = "Kelvin Silva",
                            Url = "https://github.com/kfurfles"
                        }
                    });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors("CorsPolicy");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();

            app.UseSwaggerUI(c => {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "SCSM API V1");
            });

            app.UseMvc();
        }

        public static void inicialize(){

            //AutoMapperConfig.RegisterMappings();
        }
    }
}
