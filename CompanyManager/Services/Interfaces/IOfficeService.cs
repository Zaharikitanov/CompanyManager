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
    public interface IOfficeService
    {
        Task<EntityActionOutcome> CreateEntityAsync(OfficeInputData viewData);
        Task<Office> DeleteAsync(Guid id);
        Task<List<OfficeViewData>> GetAllEntitiesAsync();
        Task<OfficeViewData> GetEntityByIdAsync(Guid entityId);
        Task<Page<OfficeViewData>> GetPaginatedEntitiesAsync(int pageSize, int currentPage, string searchText, OfficeSortingOptions sortBy);
        Task<EntityActionOutcome> UpdateEntityAsync(OfficeInputData viewData, Guid id);
    }
}