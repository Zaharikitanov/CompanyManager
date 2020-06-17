using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CompanyManager.Models.SortingOptions;
using CompanyManager.Models.View;
using EntityFrameworkPaginateCore;

namespace CompanyManager.Repositories.Interfaces
{
    public interface IOfficesRepository : IBaseRepository
    {
        Task<List<OfficeViewData>> GetEntitiesListAsync();
        Task<OfficeViewData> GetEntityDetailsAsync(Guid entityId);
        Task<Page<OfficeViewData>> GetPaginatedResultsAsync(int pageSize, int currentPage, string searchText, OfficeSortingOptions sortBy);
    }
}