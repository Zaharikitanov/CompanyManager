using System;

namespace CompanyManager.Models.Database
{
    public class OfficeDocument : Entity
    {
        public Guid OfficeId { get; set; }

        public Office Office { get; set; }

        public string FileLocation { get; set; }
    }
}
