using Newtonsoft.Json;

namespace CompanyManager.Models.View
{
    public class CompanyInputData
    {
        [JsonProperty("name")]
        public string Name { get; set; }
    }
}
