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
    public class OfficeService : IOfficeService
    {
        private IOfficesRepository _repository;
        private IOfficeFactory _factory;

        public OfficeService(IOfficesRepository repository, IOfficeFactory factory)
        {
            _repository = repository;
            _factory = factory;
        }

        public async Task<EntityActionOutcome> CreateEntityAsync(OfficeInputData viewData)
        {
            var newEntity = _factory.Create(viewData);
            var validator = new OfficeDataInputValidator();
            var result = validator.Validate(viewData);

            if (result.IsValid == false)
                return EntityActionOutcome.MissingFullEntityData;

            var upsertSuccessful = await _repository.AddAsync(newEntity);
            if (upsertSuccessful == null)
                return EntityActionOutcome.CreateFailed;

            return EntityActionOutcome.Success;
        }

        public async Task<EntityActionOutcome> UpdateEntityAsync(OfficeInputData viewData, Guid id)
        {
            var validator = new OfficeDataInputValidator();
            var result = validator.Validate(viewData);

            if (result.IsValid == false)
                return EntityActionOutcome.UpdateFailed;

            var updateSuccessful = await _repository.UpdateAsync(
                await PopulateEntityDataWithViewData(viewData, id));

            if (updateSuccessful == null)
                return EntityActionOutcome.EntityNotFound;

            return EntityActionOutcome.Success;
        }

        public async Task<OfficeViewData> GetEntityByIdAsync(Guid entityId)
        {
            return await _repository.GetEntityDetailsAsync(entityId);
        }

        public async Task<List<OfficeViewData>> GetAllEntitiesAsync()
        {
            return await _repository.GetEntitiesListAsync();
        }

        public async Task<Page<OfficeViewData>> GetPaginatedEntitiesAsync(
            int pageSize, 
            int currentPage, 
            string searchText,
            OfficeSearchOptions sortBy,
            OfficeSearchOptions searchBy)
        {
            return await _repository.GetPaginatedResultsAsync(pageSize, currentPage, searchText, sortBy, searchBy);
        }

        public async Task<Office> DeleteAsync(Guid id)
        {
            var getEntity = await _repository.GetByIdAsync<Office>(id);
            return await _repository.DeleteAsync(getEntity);
        }

        private async Task<Office> PopulateEntityDataWithViewData(OfficeInputData viewData, Guid entityId)
        {
            var getCurrent = await _repository.GetByIdAsync<Office>(entityId);

            getCurrent.City = viewData.City ?? getCurrent.City;
            getCurrent.CompanyId = viewData?.CompanyId ?? getCurrent.CompanyId;
            getCurrent.Country = viewData?.Country ?? getCurrent.Country;
            getCurrent.IsHeadquarters = viewData?.IsHeadquarters ?? getCurrent.IsHeadquarters;
            getCurrent.Street = viewData.Street ?? getCurrent.Street;
            getCurrent.StreetNumber = viewData?.StreetNumber ?? getCurrent.StreetNumber;
            getCurrent.Documents = viewData.Documents ?? getCurrent.Documents;

            return getCurrent;
        }
    }
}
