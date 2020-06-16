using Newtonsoft.Json;
using System;

namespace CompanyManager.Models.View
{
    public class OfficeDocumentViewData : OfficeDocumentInputData
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }
    }
}
