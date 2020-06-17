﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CompanyManagerApi.DatabaseContext;
using CompanyManagerApi.Mappers.Interfaces;
using CompanyManagerApi.Models.SortingOptions;
using CompanyManagerApi.Models.View;
using CompanyManagerApi.Repositories.Interfaces;
using EntityFrameworkPaginateCore;
using Microsoft.EntityFrameworkCore;

namespace CompanyManagerApi.Repositories
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

        public async Task<Page<CompanyViewData>> GetPaginatedResultsAsync(int pageSize, int currentPage, string searchText, CompanySortingOptions sortBy)
        {
            var filters = new Filters<CompanyViewData>();
            filters.Add(!string.IsNullOrEmpty(searchText), x => x.Name.Contains(searchText));

            var sorts = new Sorts<CompanyViewData>();
            sorts.Add(sortBy == CompanySortingOptions.Name, x => x.Name);

            return await _dbContext.Companies
                .Select(e => _mapper.MapToViewModel(e))
                .PaginateAsync(currentPage, pageSize, sorts, filters);
        }
    }
}