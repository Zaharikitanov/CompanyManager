﻿using CompanyManagerApi.Factories.Interfaces;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;

namespace CompanyManagerApi.Factories
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
                CompanyId = viewData.CompanyId,
                ProfileImage = viewData.ProfileImage,
                Salary = viewData.Salary,
                VacationDays = viewData.VacationDays,
                StartingDate = viewData.StartingDate
            };
        }
    }
}
