using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace CompanyManagerApi.Models.View
{
    public class OfficeViewData : OfficeInputData
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }

        [JsonProperty("employees")]
        public int Employees { get; set; }

        [JsonProperty("employeesList")]
        public List<EmployeeViewData> EmployeesList { get; set; } = new List<EmployeeViewData>();
    }
}
