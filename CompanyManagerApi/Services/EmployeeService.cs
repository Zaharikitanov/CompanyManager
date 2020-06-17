using CompanyManagerApi.Factories.Interfaces;
using CompanyManagerApi.Models;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.SortingOptions;
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
    public class EmployeeService : IEmployeeService
    {
        private IEmployeesRepository _repository;
        private IEmployeeFactory _factory;

        public EmployeeService(IEmployeesRepository repository, IEmployeeFactory factory)
        {
            _repository = repository;
            _factory = factory;
        }

        public async Task<EntityActionOutcome> CreateEntityAsync(EmployeeInputData viewData)
        {
            var newEntity = _factory.Create(viewData);
            var validator = new EmployeeDataInputValidator();
            var result = validator.Validate(viewData);

            if (result.IsValid == false)
                return EntityActionOutcome.MissingFullEntityData;

            var upsertSuccessful = await _repository.AddAsync(newEntity);
            if (upsertSuccessful == null)
                return EntityActionOutcome.CreateFailed;

            return EntityActionOutcome.Success;
        }

        public async Task<EntityActionOutcome> UpdateEntityAsync(EmployeeInputData viewData, Guid id)
        {
            var validator = new EmployeeDataInputValidator();
            var result = validator.Validate(viewData);

            if (result.IsValid == false)
                return EntityActionOutcome.UpdateFailed;

            var updateSuccessful = await _repository.UpdateAsync(
                await PopulateEntityDataWithViewData(viewData, id));

            if (updateSuccessful == null)
                return EntityActionOutcome.EntityNotFound;

            return EntityActionOutcome.Success;
        }

        public async Task<EmployeeViewData> GetEntityByIdAsync(Guid entityId)
        {
            return await _repository.GetEntityDetailsAsync(entityId);
        }

        public async Task<List<EmployeeViewData>> GetAllEntitiesAsync()
        {
            return await _repository.GetEntitiesListAsync();
        }

        public async Task<Page<EmployeeViewData>> GetPaginatedEntitiesAsync(int pageSize, int currentPage, string searchText, EmployeeSortingOptions sortBy)
        {
            return await _repository.GetPaginatedResultsAsync(pageSize, currentPage, searchText, sortBy);
        }

        public async Task<Employee> DeleteAsync(Guid id)
        {
            var getEntity = await _repository.GetByIdAsync<Employee>(id);
            return await _repository.DeleteAsync(getEntity);
        }

        private async Task<Employee> PopulateEntityDataWithViewData(EmployeeInputData viewData, Guid entityId)
        {
            var getCurrent = await _repository.GetByIdAsync<Employee>(entityId);

            getCurrent.ExperienceLevel = viewData.ExperienceLevel != getCurrent.ExperienceLevel ? viewData.ExperienceLevel : getCurrent.ExperienceLevel;
            getCurrent.FirstName = viewData.FirstName ?? getCurrent.FirstName;
            getCurrent.LastName = viewData.LastName ?? getCurrent.LastName;
            getCurrent.OfficeId = viewData?.OfficeId ?? getCurrent.OfficeId;
            getCurrent.ProfileImage = viewData.ProfileImage ?? getCurrent.ProfileImage;
            getCurrent.Salary = viewData?.Salary ?? getCurrent.Salary;
            getCurrent.VacationDays = viewData?.VacationDays ?? getCurrent.VacationDays;

            return getCurrent;
        }
    }
}
