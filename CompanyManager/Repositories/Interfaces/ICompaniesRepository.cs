using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CompanyManager.Models.View;

namespace CompanyManager.Repositories.Interfaces
{
    public interface ICompaniesRepository : IBaseRepository
    {
        Task<List<CompanyViewData>> GetEntitiesListAsync();
        Task<CompanyViewData> GetEntityDetailsAsync(Guid entityId);
    }
}