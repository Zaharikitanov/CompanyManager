using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CompanyManager.Models;
using CompanyManager.Models.Database;
using CompanyManager.Models.SortingOptions;
using CompanyManager.Models.View;
using EntityFrameworkPaginateCore;

namespace CompanyManager.Services.Interfaces
{
    public interface IEmployeeService
    {
        Task<EntityActionOutcome> CreateEntityAsync(EmployeeInputData viewData);
        Task<Employee> DeleteAsync(Guid id);
        Task<List<EmployeeViewData>> GetAllEntitiesAsync();
        Task<EmployeeViewData> GetEntityByIdAsync(Guid entityId);
        Task<Page<EmployeeViewData>> GetPaginatedEntitiesAsync(int pageSize, int currentPage, string searchText, EmployeeSortingOptions sortBy);
        Task<EntityActionOutcome> UpdateEntityAsync(EmployeeInputData viewData, Guid id);
    }
}