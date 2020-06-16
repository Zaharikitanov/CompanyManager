using Newtonsoft.Json;
using System;

namespace CompanyManager.Models.View
{
    public class EmployeeInputData
    {
        [JsonProperty("firstName")]
        public string FirstName { get; set; }

        [JsonProperty("lastName")]
        public string LastName { get; set; }

        [JsonProperty("startingDate")]
        public string StartingDate { get; set; }

        [JsonProperty("salary")]
        public decimal Salary { get; set; }

        [JsonProperty("vacationDays")]
        public int VacationDays { get; set; }

        [JsonProperty("experienceLevel")]
        public EmployeeExperienceLevel ExperienceLevel { get; set; }

        [JsonProperty("profileImage")]
        public string ProfileImage { get; set; }

        [JsonProperty("officeId")]
        public Guid OfficeId { get; set; }
    }
}
