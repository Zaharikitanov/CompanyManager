using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace CompanyManager.Models.View
{
    public class OfficeViewData : OfficeInputData
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }

        [JsonProperty("employees")]
        public List<EmployeeViewData> Employees { get; set; } = new List<EmployeeViewData>();
    }
}
