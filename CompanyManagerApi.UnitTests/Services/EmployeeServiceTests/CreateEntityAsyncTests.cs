using CompanyManagerApi.Factories.Interfaces;
using CompanyManagerApi.Models;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;
using CompanyManagerApi.Repositories.Interfaces;
using CompanyManagerApi.Services;
using Moq;
using NUnit.Framework;
using System;
using System.Threading.Tasks;

namespace CompanyManagerApi.UnitTests.Services.EmployeeServiceTests
{
    [TestFixture]
    public class CreateEntityAsyncTests
    {
        private Mock<IEmployeesRepository> _repository;
        private Mock<IEmployeeFactory> _factory;

        private EmployeeService _service;

        [SetUp]
        public void SetUp()
        {
            _factory = new Mock<IEmployeeFactory>();
            _repository = new Mock<IEmployeesRepository>();

            _repository.Setup(r => r.AddAsync(It.IsAny<Employee>())).ReturnsAsync(new Employee());

            _service = new EmployeeService(
                _repository.Object,
                _factory.Object);
        }

        [Test]
        public async Task ReturnSuccessfulCreateEntityOutcome()
        {
            Assert.AreEqual(EntityActionOutcome.Success, await _service.CreateEntityAsync(ValidNewWebsiteData()));
        }

        [Test]
        public async Task ReturnCreateFailedEntityOutcome()
        {
            _repository.Setup(r => r.AddAsync(It.IsAny<Employee>())).ReturnsAsync(It.IsAny<Employee>());

            Assert.AreEqual(EntityActionOutcome.CreateFailed, await _service.CreateEntityAsync(ValidNewWebsiteData()));
        }

        [TestCase((EmployeeExperienceLevel)14)]
        [TestCase((EmployeeExperienceLevel)16)]
        public async Task Return_MissingFullEntityDataOutcome_When_ExperienceLevel_IsInvalid(EmployeeExperienceLevel experienceLevel)
        {
            var invalidEntityData = ValidNewWebsiteData();
            invalidEntityData.ExperienceLevel = experienceLevel;
            Assert.AreEqual(EntityActionOutcome.MissingFullEntityData, await _service.CreateEntityAsync(invalidEntityData));
        }

        [TestCase("")]
        [TestCase(null)]
        [TestCase("This is very long string which is more than a sixty characters long and that is very long indeed")]
        public async Task Return_MissingFullEntityDataOutcome_When_FirstName_IsInvalid(string firstName)
        {
            var invalidEntityData = ValidNewWebsiteData();
            invalidEntityData.FirstName = firstName;
            Assert.AreEqual(EntityActionOutcome.MissingFullEntityData, await _service.CreateEntityAsync(invalidEntityData));
        }

        [TestCase("")]
        [TestCase(null)]
        [TestCase("This is very long string which is more than a sixty characters long and that is very long indeed")]
        public async Task Return_MissingFullEntityDataOutcome_When_LastName_IsInvalid(string lastName)
        {
            var invalidEntityData = ValidNewWebsiteData();
            invalidEntityData.LastName = lastName;
            Assert.AreEqual(EntityActionOutcome.MissingFullEntityData, await _service.CreateEntityAsync(invalidEntityData));
        }        

        [TestCase(null)]
        public async Task Return_MissingFullEntityDataOutcome_When_OfficeId_IsInvalid(Guid officeId)
        {
            var invalidEntityData = ValidNewWebsiteData();
            invalidEntityData.OfficeId = officeId;
            Assert.AreEqual(EntityActionOutcome.MissingFullEntityData, await _service.CreateEntityAsync(invalidEntityData));
        }

        [TestCase("")]
        [TestCase(null)]
        public async Task Return_MissingFullEntityDataOutcome_When_ProfileImage_IsInvalid(string profileImage)
        {
            var invalidEntityData = ValidNewWebsiteData();
            invalidEntityData.ProfileImage = profileImage;
            Assert.AreEqual(EntityActionOutcome.MissingFullEntityData, await _service.CreateEntityAsync(invalidEntityData));
        }

        [TestCase(0)]
        [TestCase(null)]
        public async Task Return_MissingFullEntityDataOutcome_When_Salary_IsInvalid(decimal salary)
        {
            var invalidEntityData = ValidNewWebsiteData();
            invalidEntityData.Salary = salary;
            Assert.AreEqual(EntityActionOutcome.MissingFullEntityData, await _service.CreateEntityAsync(invalidEntityData));
        }

        [TestCase(0)]
        [TestCase(null)]
        public async Task Return_MissingFullEntityDataOutcome_When_VacationDays_IsInvalid(int vacationDays)
        {
            var invalidEntityData = ValidNewWebsiteData();
            invalidEntityData.Salary = vacationDays;
            Assert.AreEqual(EntityActionOutcome.MissingFullEntityData, await _service.CreateEntityAsync(invalidEntityData));
        }

        private EmployeeInputData ValidNewWebsiteData()
        {
            return new EmployeeInputData()
            {
                ExperienceLevel = EmployeeExperienceLevel.Mid,
                FirstName = "John",
                LastName = "Rambo",
                OfficeId = new Guid("d62ae4df-39ae-416a-1225-08d7ea8d2fb3"),
                ProfileImage = "profile_image.jpg",
                Salary = 4500,
                VacationDays = 25,
            };
        }
    }
}
