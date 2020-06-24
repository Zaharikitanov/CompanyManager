using CompanyManagerApi.Factories.Interfaces;
using CompanyManagerApi.Models;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.SearchOptions;
using CompanyManagerApi.Models.View;
using CompanyManagerApi.Repositories.Interfaces;
using CompanyManagerApi.Services.Interfaces;
using CompanyManagerApi.Validators;
using EntityFrameworkPaginateCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CompanyManagerApi.Services
{
    public class CompanyService : ICompanyService
    {
        private ICompaniesRepository _repository;
        private ICompanyFactory _factory;

        public CompanyService(ICompaniesRepository repository, ICompanyFactory factory)
        {
            _repository = repository;
            _factory = factory;
        }

        public async Task<EntityActionOutcome> CreateEntityAsync(CompanyInputData viewData)
        {
            var newEntity = _factory.Create(viewData);
            var validator = new CompanyDataInputValidator();
            var result = validator.Validate(viewData);

            if (result.IsValid == false)
                return EntityActionOutcome.MissingFullEntityData;

            var upsertSuccessful = await _repository.AddAsync(newEntity);
            if (upsertSuccessful == null)
                return EntityActionOutcome.CreateFailed;

            return EntityActionOutcome.Success;
        }

        public async Task<EntityActionOutcome> UpdateEntityAsync(CompanyInputData viewData)
        {
            var validator = new CompanyDataInputValidator();
            var result = validator.Validate(viewData);

            if (result.IsValid == false)
                return EntityActionOutcome.UpdateFailed;

            var updateSuccessful = await _repository.UpdateAsync(
                await PopulateEntityDataWithViewData(viewData, viewData.Id));

            if (updateSuccessful == null)
                return EntityActionOutcome.EntityNotFound;

            return EntityActionOutcome.Success;
        }

        public async Task<CompanyViewData> GetEntityByIdAsync(Guid entityId)
        {
            return await _repository.GetEntityDetailsAsync(entityId);
        }

        public async Task<List<CompanyViewData>> GetAllEntitiesAsync()
        {
            return await _repository.GetEntitiesListAsync();
        }

        public async Task<Page<CompanyViewData>> GetPaginatedEntitiesAsync(
            int pageSize, 
            int currentPage, 
            string searchText, 
            CompanySearchOptions sortBy)
        {
            return await _repository.GetPaginatedResultsAsync(pageSize, currentPage, searchText, sortBy);
        }

        public async Task<Company> DeleteAsync(Guid id)
        {
            var getEntity = await _repository.GetByIdAsync<Company>(id);
            return await _repository.DeleteAsync(getEntity);
        }

        private async Task<Company> PopulateEntityDataWithViewData(CompanyInputData viewData, Guid entityId)
        {
            var getCurrent = await _repository.GetByIdAsync<Company>(entityId);

            getCurrent.Name = viewData.Name ?? getCurrent.Name;

            return getCurrent;
        }
    }
}
