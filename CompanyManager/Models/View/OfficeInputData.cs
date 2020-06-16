using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace CompanyManager.Models.View
{
    public class OfficeInputData
    {
        [JsonProperty("companyId")]
        public Guid CompanyId { get; set; }

        [JsonProperty("country")]
        public string Country { get; set; }

        [JsonProperty("city")]
        public string City { get; set; }

        [JsonProperty("street")]
        public string Street { get; set; }

        [JsonProperty("streetNumber")]
        public int StreetNumber { get; set; }

        [JsonProperty("officeDocuments")]
        public List<OfficeDocumentViewData> OfficeDocuments { get; set; } = new List<OfficeDocumentViewData>();

        [JsonProperty("isHeadquarters")]
        public bool IsHeadquarters { get; set; }
    }
}
