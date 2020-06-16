using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CompanyManager.Models.View;

namespace CompanyManager.Repositories.Interfaces
{
    public interface IEmployeesRepository : IBaseRepository
    {
        Task<List<EmployeeViewData>> GetEntitiesListAsync();
        Task<EmployeeViewData> GetEntityDetailsAsync(Guid entityId);
    }
}