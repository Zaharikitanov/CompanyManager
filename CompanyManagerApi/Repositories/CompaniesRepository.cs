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
    public class CompaniesRepository : BaseRepository, ICompaniesRepository
    {
        private IOfficeDataMapper _mapper;

        public CompaniesRepository(CompanyManagerContext dbContext, IOfficeDataMapper mapper) : base(dbContext)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<List<CompanyViewData>> GetEntitiesListAsync()
        {
            var entities = await _dbContext.Companies
                .Select(e => new CompanyViewData
                {
                    Id = e.Id,
                    Name = e.Name,
                    CreatedAt = e.CreatedAt,
                    OfficesAmount = e.Offices.Where(o => o.CompanyId == e.Id).Count()
                }).ToListAsync();

            return entities;
        }

        public async Task<CompanyViewData> GetEntityDetailsAsync(Guid entityId)
        {
            var entity = await _dbContext.Companies.Where(e => e.Id == entityId)
                .Select(e => new CompanyViewData
                {
                    Id = e.Id,
                    Name = e.Name,
                    CreatedAt = e.CreatedAt,
                    Offices = e.Offices
                    .Where(o => o.CompanyId == entityId).Select(o => _mapper.MapToViewModel(o))
                    .ToList()
                }).SingleOrDefaultAsync();

            return entity;
        }

        public async Task<Page<CompanyViewData>> GetPaginatedResultsAsync(int pageSize, int currentPage, string searchText, CompanySearchOptions sortBy)
        {
            var filters = new Filters<CompanyViewData>();
            filters.Add(!string.IsNullOrEmpty(searchText), x => x.Name.Contains(searchText));

            var sorts = new Sorts<CompanyViewData>();
            sorts.Add(sortBy == CompanySearchOptions.Name, x => x.Name);

            return await _dbContext.Companies
                .Select(e => new CompanyViewData
                {
                    Id = e.Id,
                    Name = e.Name,
                    CreatedAt = e.CreatedAt,
                    OfficesAmount = e.Offices.Where(o => o.CompanyId == e.Id).Count()
                })
                .PaginateAsync(currentPage, pageSize, sorts, filters);
        }
    }
}
