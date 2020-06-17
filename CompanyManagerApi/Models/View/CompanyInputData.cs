using Newtonsoft.Json;

namespace CompanyManagerApi.Models.View
{
    public class CompanyInputData
    {
        [JsonProperty("name")]
        public string Name { get; set; }
    }
}
