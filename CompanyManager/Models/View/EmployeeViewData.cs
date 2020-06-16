using Newtonsoft.Json;
using System;

namespace CompanyManager.Models.View
{
    public class EmployeeViewData : EmployeeInputData
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }
    }
}
