using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace CompanyManagerApi.Models.View
{
    public class EmployeeViewData : EmployeeInputData
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }

        [JsonProperty("offices")]
        public List<OfficeViewData> Offices { get; set; } = new List<OfficeViewData>();
    }
}
