using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CompanyManager.Models.SortingOptions;
using CompanyManager.Models.View;
using EntityFrameworkPaginateCore;

namespace CompanyManager.Repositories.Interfaces
{
    public interface ICompaniesRepository : IBaseRepository
    {
        Task<List<CompanyViewData>> GetEntitiesListAsync();
        Task<CompanyViewData> GetEntityDetailsAsync(Guid entityId);
        Task<Page<CompanyViewData>> GetPaginatedResultsAsync(int pageSize, int currentPage, string searchText, CompanySortingOptions sortBy);
    }
}