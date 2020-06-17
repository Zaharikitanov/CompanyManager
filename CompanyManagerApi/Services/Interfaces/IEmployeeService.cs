using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CompanyManagerApi.Models;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.SortingOptions;
using CompanyManagerApi.Models.View;
using EntityFrameworkPaginateCore;

namespace CompanyManagerApi.Services.Interfaces
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