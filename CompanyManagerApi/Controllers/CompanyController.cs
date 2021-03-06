﻿using CompanyManagerApi.Factories.Interfaces;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.SearchOptions;
using CompanyManagerApi.Models.View;
using CompanyManagerApi.Services.Interfaces;
using EntityFrameworkPaginateCore;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace CompanyManagerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private ICompanyService _service;
        private IStatusCodeResultFactory _resultFactory;

        public CompanyController(ICompanyService service, IStatusCodeResultFactory factory)
        {
            _service = service;
            _resultFactory = factory;
        }

        [HttpPost]
        public async Task<HttpStatusCode> Create(CompanyInputData inputData)
        {
            var createEntityOutcome = await _service.CreateEntityAsync(inputData);

            return _resultFactory.Create(createEntityOutcome);
        }

        [HttpGet]
        public async Task<List<CompanyViewData>> GetAllEntities()
        {
            return await _service.GetAllEntitiesAsync();
        }

        [HttpGet("search")]
        public async Task<Page<CompanyViewData>> GetSearchResults(
            int pageSize = 10,
            int currentPage = 1,
            string searchText = "",
            CompanySearchOptions sortBy = CompanySearchOptions.Name
            )
        {
            return await _service.GetPaginatedEntitiesAsync(pageSize, currentPage, searchText, sortBy);
        }

        [HttpGet("{id}")]
        public async Task<CompanyViewData> GetEntityById(Guid id)
        {
            return await _service.GetEntityByIdAsync(id);
        }

        [HttpPut]
        public async Task<HttpStatusCode> Update(CompanyInputData inputData)
        {
            var updateEntityOutcome = await _service.UpdateEntityAsync(inputData);

            return _resultFactory.Create(updateEntityOutcome);
        }

        [HttpDelete("{id}")]
        public async Task<Company> Delete(Guid id)
        {
            return await _service.DeleteAsync(id);
        }
    }
}