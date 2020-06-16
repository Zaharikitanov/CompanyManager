using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace CompanyManager.Models.View
{
    public class CompanyViewData : CompanyInputData
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }

        [JsonProperty("createdAt")]
        public string CreatedAt { get; set; }

        [JsonProperty("offices")]
        public List<OfficeViewData> Offices { get; set; } = new List<OfficeViewData>();
    }
}
