using CompanyManager.Factories.Interfaces;
using CompanyManager.Models.Database;
using CompanyManager.Models.View;
using System;

namespace CompanyManager.Factories
{
    public class EmployeeFactory : IEmployeeFactory
    {
        public Employee Create(EmployeeInputData viewData)
        {
            return new Employee
            {
                ExperienceLevel = viewData.ExperienceLevel,
                FirstName = viewData.FirstName,
                LastName = viewData.LastName,
                OfficeId = viewData.OfficeId,
                ProfileImage = viewData.ProfileImage,
                Salary = viewData.Salary,
                VacationDays = viewData.VacationDays,
                StartingDate = DateTime.Now.ToString(),
            };
        }
    }
}
