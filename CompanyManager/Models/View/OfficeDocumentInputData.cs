using Newtonsoft.Json;
using System;

namespace CompanyManager.Models.View
{
    public class OfficeDocumentInputData
    {
        [JsonProperty("officeId")]
        public Guid OfficeId { get; set; }

        [JsonProperty("fileLocation")]
        public string FileLocation { get; set; }
    }
}
