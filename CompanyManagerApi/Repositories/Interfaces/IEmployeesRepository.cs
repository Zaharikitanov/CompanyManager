using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CompanyManagerApi.Models.SortingOptions;
using CompanyManagerApi.Models.View;
using EntityFrameworkPaginateCore;

namespace CompanyManagerApi.Repositories.Interfaces
{
    public interface IEmployeesRepository : IBaseRepository
    {
        Task<List<EmployeeViewData>> GetEntitiesListAsync();
        Task<EmployeeViewData> GetEntityDetailsAsync(Guid entityId);
        Task<Page<EmployeeViewData>> GetPaginatedResultsAsync(int pageSize, int currentPage, string searchText, EmployeeSortingOptions sortBy);
    }
}