using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CompanyManager.DatabaseContext;
using CompanyManager.Mappers.Interfaces;
using CompanyManager.Models.SortingOptions;
using CompanyManager.Models.View;
using CompanyManager.Repositories.Interfaces;
using EntityFrameworkPaginateCore;
using Microsoft.EntityFrameworkCore;

namespace CompanyManager.Repositories
{
    public class EmployeesRepository : BaseRepository, IEmployeesRepository
    {
        private IEmployeeDataMapper _mapper;

        public EmployeesRepository(CompanyManagerContext dbContext, IEmployeeDataMapper mapper) : base(dbContext)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<List<EmployeeViewData>> GetEntitiesListAsync()
        {
            var entities = await _dbContext.Employees
                .Select(e => _mapper.MapToViewModel(e)).ToListAsync();

            return entities;
        }

        public async Task<EmployeeViewData> GetEntityDetailsAsync(Guid entityId)
        {
            var entity = await _dbContext.Employees.Where(e => e.Id == entityId)
                .Select(e => _mapper.MapToViewModel(e)).SingleOrDefaultAsync();

            return entity;
        }

        public async Task<Page<EmployeeViewData>> GetPaginatedResultsAsync(int pageSize, int currentPage, string searchText, EmployeeSortingOptions sortBy)
        {
            var filters = new Filters<EmployeeViewData>();
            filters.Add(!string.IsNullOrEmpty(searchText), x => x.FirstName.Contains(searchText));
            filters.Add(!string.IsNullOrEmpty(searchText), x => x.LastName.Contains(searchText));

            var sorts = new Sorts<EmployeeViewData>();
            sorts.Add(sortBy == EmployeeSortingOptions.FirstName, x => x.FirstName);
            sorts.Add(sortBy == EmployeeSortingOptions.LastName, x => x.LastName);

            return await _dbContext.Employees
                .Select(e => _mapper.MapToViewModel(e))
                .PaginateAsync(currentPage, pageSize, sorts, filters);
        }
    }
}
