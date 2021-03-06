﻿using System;
using System.Collections.Generic;

namespace CompanyManagerApi.Models.Database
{
    public class Office : Entity
    {
        public Guid CompanyId { get; set; }

        public Company Company { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public string Street { get; set; }

        public int StreetNumber { get; set; }
        
        public bool IsHeadquarters { get; set; }

        public string Documents { get; set; }

        public List<Employee> EmployeesList { get; set; } = new List<Employee>();
    }
}
