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
    public class OfficesRepository : BaseRepository, IOfficesRepository
    {
        private IEmployeeDataMapper _mapper;

        public OfficesRepository(CompanyManagerContext dbContext, IEmployeeDataMapper mapper) : base(dbContext)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<List<OfficeViewData>> GetEntitiesListAsync()
        {
            var entities = await _dbContext.Offices
                .Select(o => new OfficeViewData {
                    Id = o.Id,
                    CompanyId = o.CompanyId,
                    Country = o.Country,
                    City = o.City,
                    Street = o.Street,
                    StreetNumber = o.StreetNumber,
                    Employees = o.EmployeesList.Where(e => e.OfficeId == o.Id).Count()
                }).ToListAsync();

            return entities;
        }

        public async Task<OfficeViewData> GetEntityDetailsAsync(Guid entityId)
        {
            var entity = await _dbContext.Offices.Where(e => e.Id == entityId)
                .Select(o => new OfficeViewData
                {
                    Id = o.Id,
                    CompanyId = o.CompanyId,
                    Country = o.Country,
                    City = o.City,
                    Street = o.Street,
                    StreetNumber = o.StreetNumber,
                    Documents = o.Documents,
                    IsHeadquarters = o.IsHeadquarters,
                    EmployeesList = _dbContext.Employees
                    .Where(e => e.OfficeId == entityId).Select(e => _mapper.MapToViewModel(e))
                    .ToList()
                }).SingleOrDefaultAsync();

            return entity;
        }

        public async Task<Page<OfficeViewData>> GetPaginatedResultsAsync(
            int pageSize, 
            int currentPage, 
            string searchText, 
            OfficeSearchOptions sortBy,
            OfficeSearchOptions searchBy)
        {
            var filters = new Filters<OfficeViewData>();
            
            switch (searchBy)
            {
                case OfficeSearchOptions.Country:
                    filters.Add(!string.IsNullOrEmpty(searchText), x => x.Country.Contains(searchText));
                    break;
                case OfficeSearchOptions.Street:
                    filters.Add(!string.IsNullOrEmpty(searchText), x => x.Street.Contains(searchText));
                    break;
                case OfficeSearchOptions.City:
                default:
                    filters.Add(!string.IsNullOrEmpty(searchText), x => x.City.Contains(searchText));
                    break;
            }

            var sorts = new Sorts<OfficeViewData>();
            sorts.Add(sortBy == OfficeSearchOptions.City, x => x.City);
            sorts.Add(sortBy == OfficeSearchOptions.Country, x => x.Country);
            sorts.Add(sortBy == OfficeSearchOptions.Street, x => x.Street);

            return await _dbContext.Offices
                .Select(o => new OfficeViewData
                {
                    Id = o.Id,
                    CompanyId = o.CompanyId,
                    Country = o.Country,
                    City = o.City,
                    Street = o.Street,
                    StreetNumber = o.StreetNumber,
                    Employees = _dbContext.Employees.Where(e => e.OfficeId == o.Id).Count()
                })
                .PaginateAsync(currentPage, pageSize, sorts, filters);
        }
    }
}
