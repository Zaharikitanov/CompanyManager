using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CompanyManagerApi.Models.SortingOptions;
using CompanyManagerApi.Models.View;
using EntityFrameworkPaginateCore;

namespace CompanyManagerApi.Repositories.Interfaces
{
    public interface IOfficesRepository : IBaseRepository
    {
        Task<List<OfficeViewData>> GetEntitiesListAsync();
        Task<OfficeViewData> GetEntityDetailsAsync(Guid entityId);
        Task<Page<OfficeViewData>> GetPaginatedResultsAsync(int pageSize, int currentPage, string searchText, OfficeSortingOptions sortBy);
    }
}