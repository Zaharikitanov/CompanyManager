using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CompanyManagerApi.Models.Database;

namespace CompanyManagerApi.Repositories.Interfaces
{
    public interface IBaseRepository
    {
        Task<T> AddAsync<T>(T entity) where T : Entity;
        Task<T> DeleteAsync<T>(T entity) where T : Entity;
        Task<T> GetByIdAsync<T>(Guid id) where T : Entity;
        Task<List<T>> ListAsync<T>() where T : Entity;
        Task<T> UpdateAsync<T>(T entity) where T : Entity;
    }
}