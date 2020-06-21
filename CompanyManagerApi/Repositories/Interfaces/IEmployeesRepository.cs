using CompanyManagerApi.Models.SearchOptions;
using CompanyManagerApi.Models.View;
using EntityFrameworkPaginateCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CompanyManagerApi.Repositories.Interfaces
{
    public interface IEmployeesRepository : IBaseRepository
    {
        Task<List<EmployeeViewData>> GetEntitiesListAsync();
        Task<EmployeeViewData> GetEntityDetailsAsync(Guid entityId);
        Task<Page<EmployeeViewData>> GetPaginatedResultsAsync(
            int pageSize,
            int currentPage,
            string searchText,
            EmployeeSearchOptions sortBy,
            EmployeeSearchOptions searchBy);
    }
}