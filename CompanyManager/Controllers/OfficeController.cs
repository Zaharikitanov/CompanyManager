using CompanyManager.Factories.Interfaces;
using CompanyManager.Models.Database;
using CompanyManager.Models.SortingOptions;
using CompanyManager.Models.View;
using CompanyManager.Services.Interfaces;
using EntityFrameworkPaginateCore;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace CompanyManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfficeController : ControllerBase
    {
        private IOfficeService _service;
        private IStatusCodeResultFactory _resultFactory;

        public OfficeController(IOfficeService service, IStatusCodeResultFactory factory)
        {
            _service = service;
            _resultFactory = factory;
        }

        [HttpPost]
        public async Task<HttpStatusCode> Create(OfficeInputData inputData)
        {
            var createEntityOutcome = await _service.CreateEntityAsync(inputData);

            return _resultFactory.Create(createEntityOutcome);
        }

        [HttpGet]
        public async Task<List<OfficeViewData>> GetAllEntities()
        {
            return await _service.GetAllEntitiesAsync();
        }

        [HttpGet("/search")]
        public async Task<Page<OfficeViewData>> GetSearchResults(
            int pageSize = 10,
            int currentPage = 1,
            string searchText = "",
            OfficeSortingOptions sortBy = OfficeSortingOptions.City
            )
        {
            return await _service.GetPaginatedEntitiesAsync(pageSize, currentPage, searchText, sortBy);
        }

        [HttpGet("{id}")]
        public async Task<OfficeViewData> GetEntityById(Guid id)
        {
            return await _service.GetEntityByIdAsync(id);
        }

        [HttpPut("{id}")]
        public async Task<HttpStatusCode> Update(OfficeInputData inputData, Guid id)
        {
            var updateEntityOutcome = await _service.UpdateEntityAsync(inputData, id);

            return _resultFactory.Create(updateEntityOutcome);
        }

        [HttpDelete("{id}")]
        public async Task<Office> Delete(Guid id)
        {
            return await _service.DeleteAsync(id);
        }
    }
}