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
    public interface IOfficeService
    {
        Task<EntityActionOutcome> CreateEntityAsync(OfficeInputData viewData);
        Task<Office> DeleteAsync(Guid id);
        Task<List<OfficeViewData>> GetAllEntitiesAsync();
        Task<OfficeViewData> GetEntityByIdAsync(Guid entityId);
        Task<Page<OfficeViewData>> GetPaginatedEntitiesAsync(int pageSize,
            int currentPage,
            string searchText,
            OfficeSearchOptions sortBy,
            OfficeSearchOptions searchBy);
        Task<EntityActionOutcome> UpdateEntityAsync(OfficeInputData viewData, Guid id);
    }
}