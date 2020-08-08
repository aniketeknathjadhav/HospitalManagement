using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HospitalManagementMVC.DAL;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace HospitalManagementMVC
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
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = "finishingschool",
                ValidAudience = "finishingschool",
                    IssuerSigningKey = new
                SymmetricSecurityKey(Encoding.UTF8.GetBytes("238420983409284098230948"))
                };
            });

            services.AddDbContext<PatientDal>(options => options.UseSqlServer(Configuration["ConnStr"].ToString()));
          //  services.AddDbContext<DoctorDal>(options => options.UseSqlServer(Configuration["ConnStr"].ToString()));



            services.AddControllers().AddNewtonsoftJson(options =>
            {
                //options.SerializerSettings.ContractResolver = new DefaultContractResolver();
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

            });

            

            services.AddControllersWithViews();

           
            services.AddCors(o => o.AddPolicy("AllowOriginRule", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseRouting();
            app.UseCors("AllowOriginRule");
            app.UseAuthorization();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                 name: "default",
                    pattern: "{controller=Patient}/{action=Submit}");

                endpoints.MapControllerRoute(
                    name: "route1",
                    pattern: "Hospital/Register",
                  defaults: new { controller = "Patient", action = "Submit" });

                endpoints.MapControllerRoute(
                    name: "route2",
                    pattern: "Patient/New",
                  defaults: new { controller = "patient", action = "Submit" });
            });
        }
    }
}
