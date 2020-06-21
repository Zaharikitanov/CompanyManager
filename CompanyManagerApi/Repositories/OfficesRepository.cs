﻿using CompanyManagerApi.DatabaseContext;
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
        private IOfficeDataMapper _mapper;

        public OfficesRepository(CompanyManagerContext dbContext, IOfficeDataMapper mapper) : base(dbContext)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<List<OfficeViewData>> GetEntitiesListAsync()
        {
            var entities = await _dbContext.Offices
                .Select(e => new OfficeViewData {
                    Id = e.Id,
                    CompanyId = e.CompanyId,

                }).ToListAsync();

            return entities;
        }

        public async Task<OfficeViewData> GetEntityDetailsAsync(Guid entityId)
        {
            var entity = await _dbContext.Offices.Where(e => e.Id == entityId)
                .Select(e => _mapper.MapToViewModel(e)).SingleOrDefaultAsync();

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
                .Select(e => _mapper.MapToViewModel(e))
                .PaginateAsync(currentPage, pageSize, sorts, filters);
        }
    }
}
