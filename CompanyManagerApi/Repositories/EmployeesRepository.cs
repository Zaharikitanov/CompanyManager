using CompanyManagerApi.DatabaseContext;
using CompanyManagerApi.Mappers.Interfaces;
using CompanyManagerApi.Models.SearchOptions;
using CompanyManagerApi.Models.View;
using CompanyManagerApi.Repositories.Interfaces;
using EntityFrameworkPaginateCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CompanyManagerApi.Repositories
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
                .Select(e => new EmployeeViewData {
                    Id = e.Id,
                    FirstName = e.FirstName,
                    LastName = e.LastName,
                    StartingDate = e.StartingDate,
                    Salary = e.Salary,
                    VacationDays = e.VacationDays,
                    ExperienceLevel = e.ExperienceLevel,
                    ProfileImage = e.ProfileImage,
                    OfficeId = e.OfficeId,
                    Offices = _dbContext.Offices.Where(o => o.CompanyId == e.CompanyId).Select(o => new OfficeViewData {
                        Id = o.Id,
                        City = o.City,
                        Street = o.Street,
                        StreetNumber = o.StreetNumber
                    })
                    .ToList()
                }).SingleOrDefaultAsync();

            return entity;
        }

        public async Task<Page<EmployeeViewData>> GetPaginatedResultsAsync(
            int pageSize, 
            int currentPage, 
            string searchText, 
            EmployeeSearchOptions sortBy,
            EmployeeSearchOptions searchBy)
        {
            var filters = new Filters<EmployeeViewData>();

            switch (searchBy)
            {
                case EmployeeSearchOptions.LastName:
                    filters.Add(!string.IsNullOrEmpty(searchText), x => x.LastName.Contains(searchText));
                    break;
                case EmployeeSearchOptions.FirstName:
                default:
                    filters.Add(!string.IsNullOrEmpty(searchText), x => x.FirstName.Contains(searchText));
                    break;
            }

            var sorts = new Sorts<EmployeeViewData>();
            sorts.Add(sortBy == EmployeeSearchOptions.FirstName, x => x.FirstName);
            sorts.Add(sortBy == EmployeeSearchOptions.LastName, x => x.LastName);

            return await _dbContext.Employees
                .Select(e => _mapper.MapToViewModel(e))
                .PaginateAsync(currentPage, pageSize, sorts, filters);
        }
    }
}
