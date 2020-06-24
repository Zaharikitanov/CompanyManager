using CompanyManagerApi.DatabaseContext;
using CompanyManagerApi.Factories;
using CompanyManagerApi.Factories.Interfaces;
using CompanyManagerApi.Mappers;
using CompanyManagerApi.Mappers.Interfaces;
using CompanyManagerApi.Repositories;
using CompanyManagerApi.Repositories.Interfaces;
using CompanyManagerApi.Services;
using CompanyManagerApi.Services.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace CompanyManagerApi
{
    public class Startup
    {
        private const string AllowAllCorsPolicy = "Allow All Cors Policy";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            services.AddCors(options =>
            {
                options.AddPolicy(AllowAllCorsPolicy,
                    builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Company Manager", Version = "v1" });
            });

            services.AddDbContext<CompanyManagerContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            RegisterBusinessLogicServices(services);
            RegisterDataMappers(services);
            RegisterRepositories(services);
            RegisterFactories(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors(AllowAllCorsPolicy);
            }

            app.UseMvc();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Company Manager");
            });

            DbInitializer.SeedData(app);
        }
        private static void RegisterBusinessLogicServices(IServiceCollection services)
        {
            services.AddTransient<ICompanyService, CompanyService>();
            services.AddTransient<IOfficeService, OfficeService>();
            services.AddTransient<IEmployeeService, EmployeeService>();
        }

        private static void RegisterRepositories(IServiceCollection services)
        {
            services.AddScoped<ICompaniesRepository, CompaniesRepository>();
            services.AddScoped<IOfficesRepository, OfficesRepository>();
            services.AddScoped<IEmployeesRepository, EmployeesRepository>();
        }

        private static void RegisterFactories(IServiceCollection services)
        {
            services.AddTransient<ICompanyFactory, CompanyFactory>();
            services.AddTransient<IOfficeFactory, OfficeFactory>();
            services.AddTransient<IEmployeeFactory, EmployeeFactory>();
            services.AddTransient<IStatusCodeResultFactory, StatusCodeResultFactory>();
        }

        private static void RegisterDataMappers(IServiceCollection services)
        {
            services.AddTransient<ICompanyDataMapper, CompanyDataMapper>();
            services.AddTransient<IOfficeDataMapper, OfficeDataMapper>();
            services.AddTransient<IEmployeeDataMapper, EmployeeDataMapper>();
        }
    }
}
