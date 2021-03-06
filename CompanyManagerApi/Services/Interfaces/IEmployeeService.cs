﻿using CompanyManagerApi.Models;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.SearchOptions;
using CompanyManagerApi.Models.View;
using EntityFrameworkPaginateCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CompanyManagerApi.Services.Interfaces
{
    public interface IEmployeeService
    {
        Task<EntityActionOutcome> CreateEntityAsync(EmployeeInputData viewData);
        Task<Employee> DeleteAsync(Guid id);
        Task<List<EmployeeViewData>> GetAllEntitiesAsync();
        Task<EmployeeViewData> GetEntityByIdAsync(Guid entityId);
        Task<Page<EmployeeViewData>> GetPaginatedEntitiesAsync(
            int pageSize,
            int currentPage,
            string searchText,
            EmployeeSearchOptions sortBy,
            EmployeeSearchOptions searchBy);
        Task<EntityActionOutcome> UpdateEntityAsync(EmployeeInputData viewData, Guid id);
    }
}