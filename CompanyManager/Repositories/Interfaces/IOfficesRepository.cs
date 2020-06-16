using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CompanyManager.Models.View;

namespace CompanyManager.Repositories.Interfaces
{
    public interface IOfficesRepository : IBaseRepository
    {
        Task<List<OfficeViewData>> GetEntitiesListAsync();
        Task<OfficeViewData> GetEntityDetailsAsync(Guid entityId);
    }
}