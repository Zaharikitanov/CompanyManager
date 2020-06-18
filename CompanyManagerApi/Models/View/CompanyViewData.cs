using Newtonsoft.Json;
using System;

namespace CompanyManagerApi.Models.View
{
    public class CompanyViewData : CompanyInputData
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }

        [JsonProperty("createdAt")]
        public string CreatedAt { get; set; }

        [JsonProperty("officesAmount")]
        public int OfficesAmount { get; set; }
    }
}
