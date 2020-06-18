using CompanyManagerApi.Models;
using CompanyManagerApi.Models.Database;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace CompanyManagerApi.DatabaseContext
{
    public static class DbInitializer
    {
        public static void SeedData(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                LoadData(serviceScope.ServiceProvider.GetService<CompanyManagerContext>());
            }
        }

        public static void LoadData(CompanyManagerContext context)
        {
            System.Console.WriteLine("Applying Migrations...");
            context.Database.Migrate();
            var companyId = new Guid("11223344-5566-7788-99AA-BBCCDDEEFF00");
            var officeId = new Guid("D62AE4DF-39AE-416A-1225-08D7EA8D2FB3");

            if (!context.Companies.Any())
            {
                System.Console.WriteLine("Adding companies - seeding...");
                context.Companies.AddRange(
                    new Company() { Id = companyId, Name = "Nice Company", CreatedAt = DateTime.Now.ToString() }
                );
            }
            else
            {
                System.Console.WriteLine("Already have companies data - not seeding");
            }

            if (!context.Offices.Any())
            {
                System.Console.WriteLine("Adding offices - seeding...");
                context.Offices.AddRange(
                    new Office() { Id = officeId, CompanyId = companyId, Country = "Germany", City = "Berlin", Street = "Bahnhofstrasse", StreetNumber = 49, IsHeadquarters=true },
                    new Office() { CompanyId = companyId, Country = "Germany", City = "Bremen", Street = "Gartenstrasse", StreetNumber = 12, IsHeadquarters=false }
                );
            }
            else
            {
                System.Console.WriteLine("Already have offices data - not seeding");
            }

            if (!context.Offices.Any())
            {
                System.Console.WriteLine("Adding employees - seeding...");
                context.Employees.AddRange(
                    new Employee() { OfficeId = officeId, FirstName = "Horst", LastName = "Fuchs", Salary = 5000, ExperienceLevel = EmployeeExperienceLevel.Senior, VacationDays = 20 },
                    new Employee() { OfficeId = officeId, FirstName = "Peter", LastName = "Klaus", Salary = 4500, ExperienceLevel = EmployeeExperienceLevel.Senior, VacationDays = 20 }
                );
            }
            else
            {
                System.Console.WriteLine("Already have employees data - not seeding");
            }

            if (!context.Offices.Any())
            {
                System.Console.WriteLine("Adding documents - seeding...");
                context.OfficeDocuments.AddRange(
                    new OfficeDocument() { OfficeId = officeId, FileLocation = "/files/word/important.docx" },
                    new OfficeDocument() { OfficeId = officeId, FileLocation = "/files/pdf/portfolio.pdf" }
                );
            }
            else
            {
                System.Console.WriteLine("Already have documents data - not seeding");
            }
            context.SaveChanges();
        }
    }
}
