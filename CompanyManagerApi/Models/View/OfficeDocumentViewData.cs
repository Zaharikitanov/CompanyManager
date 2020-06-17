using Newtonsoft.Json;
using System;

namespace CompanyManagerApi.Models.View
{
    public class OfficeDocumentViewData : OfficeDocumentInputData
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }
    }
}
