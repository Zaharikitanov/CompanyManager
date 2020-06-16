using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CompanyManager.DatabaseContext;
using CompanyManager.Mappers.Interfaces;
using CompanyManager.Models.View;
using CompanyManager.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CompanyManager.Repositories
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
                .Select(e => _mapper.MapToViewModel(e)).ToListAsync();

            return entities;
        }

        public async Task<OfficeViewData> GetEntityDetailsAsync(Guid entityId)
        {
            var entity = await _dbContext.Offices.Where(e => e.Id == entityId)
                .Select(e => _mapper.MapToViewModel(e)).SingleOrDefaultAsync();

            return entity;
        }


    }
}
