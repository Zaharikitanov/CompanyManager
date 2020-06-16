using System;
using System.Collections.Generic;

namespace CompanyManager.Models.Database
{
    public class Office : Entity
    {
        public Guid CompanyId { get; set; }

        public Company Company { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public string Street { get; set; }

        public int StreetNumber { get; set; }

        public List<OfficeDocument> OfficeDocuments { get; set; } = new List<OfficeDocument>();

        public bool IsHeadquarters { get; set; }

        public List<Employee> Employees { get; set; } = new List<Employee>();
    }
}
