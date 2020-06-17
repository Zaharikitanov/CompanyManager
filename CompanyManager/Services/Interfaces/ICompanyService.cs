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
    public interface ICompanyService
    {
        Task<EntityActionOutcome> CreateEntityAsync(CompanyInputData viewData);
        Task<Company> DeleteAsync(Guid id);
        Task<List<CompanyViewData>> GetAllEntitiesAsync();
        Task<CompanyViewData> GetEntityByIdAsync(Guid entityId);
        Task<Page<CompanyViewData>> GetPaginatedEntitiesAsync(int pageSize, int currentPage, string searchText, CompanySortingOptions sortBy);
        Task<EntityActionOutcome> UpdateEntityAsync(CompanyInputData viewData, Guid id);
    }
}