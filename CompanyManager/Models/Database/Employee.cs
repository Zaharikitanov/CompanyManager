using System;

namespace CompanyManager.Models.Database
{
    public class Employee : Entity
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string StartingDate { get; set; }

        public decimal Salary { get; set; }

        public int VacationDays { get; set; }

        public EmployeeExperienceLevel ExperienceLevel { get; set; }

        public string ProfileImage { get; set; }

        public Guid OfficeId { get; set; }

        public Office Office { get; set; }
    }
}
