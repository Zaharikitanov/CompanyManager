using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CompanyManager.Models.SortingOptions;
using CompanyManager.Models.View;
using EntityFrameworkPaginateCore;

namespace CompanyManager.Repositories.Interfaces
{
    public interface IEmployeesRepository : IBaseRepository
    {
        Task<List<EmployeeViewData>> GetEntitiesListAsync();
        Task<EmployeeViewData> GetEntityDetailsAsync(Guid entityId);
        Task<Page<EmployeeViewData>> GetPaginatedResultsAsync(int pageSize, int currentPage, string searchText, EmployeeSortingOptions sortBy);
    }
}