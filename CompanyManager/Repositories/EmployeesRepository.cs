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
    }
}
