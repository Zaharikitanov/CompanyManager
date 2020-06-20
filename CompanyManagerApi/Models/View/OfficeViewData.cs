using Newtonsoft.Json;
using System;

namespace CompanyManagerApi.Models.View
{
    public class OfficeViewData : OfficeInputData
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }

        [JsonProperty("employees")]
        public int EmployeesAmount { get; set; }
    }
}
