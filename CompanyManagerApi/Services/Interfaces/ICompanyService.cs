using CompanyManagerApi.Models;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.SearchOptions;
using CompanyManagerApi.Models.View;
using EntityFrameworkPaginateCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CompanyManagerApi.Services.Interfaces
{
    public interface ICompanyService
    {
        Task<EntityActionOutcome> CreateEntityAsync(CompanyInputData viewData);
        Task<Company> DeleteAsync(Guid id);
        Task<List<CompanyViewData>> GetAllEntitiesAsync();
        Task<CompanyViewData> GetEntityByIdAsync(Guid entityId);
        Task<Page<CompanyViewData>> GetPaginatedEntitiesAsync(
            int pageSize, 
            int currentPage, 
            string searchText, 
            CompanySearchOptions sortBy);
        Task<EntityActionOutcome> UpdateEntityAsync(CompanyViewData viewData);
    }
}