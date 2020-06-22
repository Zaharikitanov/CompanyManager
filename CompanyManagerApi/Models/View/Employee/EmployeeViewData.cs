using Newtonsoft.Json;
using System;

namespace CompanyManagerApi.Models.View
{
    public class EmployeeViewData : EmployeeInputData
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }
    }
}
