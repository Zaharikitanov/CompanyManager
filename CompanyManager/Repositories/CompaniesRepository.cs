using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CompanyManager.DatabaseContext;
using CompanyManager.Mappers.Interfaces;
using CompanyManager.Models.View;
using CompanyManager.Repositories.Interfaces;
using EntityFrameworkPaginateCore;
using Microsoft.EntityFrameworkCore;

namespace CompanyManager.Repositories
{
    public class CompaniesRepository : BaseRepository, ICompaniesRepository
    {
        private ICompanyDataMapper _mapper;

        public CompaniesRepository(CompanyManagerContext dbContext, ICompanyDataMapper mapper) : base(dbContext)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<List<CompanyViewData>> GetEntitiesListAsync()
        {
            var entities = await _dbContext.Companies
                .Select(e => _mapper.MapToViewModel(e)).ToListAsync();

            return entities;
        }

        public async Task<CompanyViewData> GetEntityDetailsAsync(Guid entityId)
        {
            var entity = await _dbContext.Companies.Where(e => e.Id == entityId)
                .Select(e => _mapper.MapToViewModel(e)).SingleOrDefaultAsync();

            return entity;
        }

        public async Task<Page<CompanyViewData>> GetPaginatedResultsAsync(int pageSize, int currentPage, string searchText, SortByOptions sortBy)
        {
            var filters = new Filters<CompanyViewData>();
            filters.Add(!string.IsNullOrEmpty(searchText), x => x.Name.Contains(searchText));

            var sorts = new Sorts<CompanyViewData>();
            sorts.Add(sortBy == SortByOptions.Name, x => x.Name);
            sorts.Add(sortBy == SortByOptions.CreatedAt, x => x.CreatedAt);
            sorts.Add(sortBy == SortByOptions.EditedAt, x => x.EditedAt);

            return await _dbContext.Companies
                .Select(e => _mapper.MapToViewModel(e))
                .PaginateAsync(currentPage, pageSize, sorts, filters);
        }
    }
}
