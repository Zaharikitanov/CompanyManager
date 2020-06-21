using CompanyManagerApi.Mappers;
using CompanyManagerApi.Models;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;
using NUnit.Framework;
using System;

namespace CompanyManagerApi.UnitTests.Mappers
{
    [TestFixture]
    public class EmployeeDataMapperTests
    {
        private Guid id = new Guid("d62ae4df-39ae-416a-1225-08d7ea8d2fb3");
        private const string firstName = "Jeff";
        private const string lastName = "Bezos";
        private const EmployeeExperienceLevel experienceLevel = EmployeeExperienceLevel.Mid;
        private Guid officeId = new Guid("D62AE4DF-39AE-416A-1225-08D7EA8D2FB3");
        private const string profileImage = "profile_image.jpg";
        private const decimal salary = 4500;
        private const string startingDate = "11/05/2020";
        private const int vacationDays = 25;
        
        private EmployeeDataMapper _mapper;

        [SetUp]
        public void SetUp()
        {
            _mapper = new EmployeeDataMapper();
        }

        [Test]
        public void ReturnMappedObject()
        {
            Assert.NotNull(RunMapperMap());
        }

        [Test]
        public void CheckIfMappedObjectIsOfExpectedType()
        {
            Assert.IsInstanceOf(typeof(EmployeeViewData), RunMapperMap());
        }

        [Test]
        public void CheckForCorrectlyMappedValues()
        {
            var result = RunMapperMap();

            Assert.AreEqual(id, result.Id);
            Assert.AreEqual(firstName, result.FirstName);
            Assert.AreEqual(lastName, result.LastName);
            Assert.AreEqual(experienceLevel, result.ExperienceLevel);
            Assert.AreEqual(officeId, result.OfficeId);
            Assert.AreEqual(profileImage, result.ProfileImage);
            Assert.AreEqual(salary, result.Salary);
            Assert.AreEqual(startingDate, result.StartingDate);
            Assert.AreEqual(vacationDays, result.VacationDays);
        }

        private EmployeeViewData RunMapperMap()
        {
            return _mapper.MapToViewModel(
              new Employee()
              {
                  Id = id,
                  FirstName = firstName,
                  LastName = lastName,
                  ExperienceLevel = experienceLevel,
                  OfficeId = officeId,
                  ProfileImage = profileImage,
                  Salary = salary,
                  StartingDate = startingDate,
                  VacationDays = vacationDays
              });
        }
    }
}
