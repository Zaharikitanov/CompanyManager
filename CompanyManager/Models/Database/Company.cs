﻿using System.Collections.Generic;

namespace CompanyManager.Models.Database
{
    public class Company : Entity
    {
        public string Name { get; set; }

        public string CreatedAt { get; set; }

        public List<Office> Offices { get; set; } = new List<Office>();
    }
}
