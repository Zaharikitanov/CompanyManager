using CompanyManagerApi.Factories;
using CompanyManagerApi.Models;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;
using NUnit.Framework;
using System;

namespace CompanyManagerApi.UnitTests.Factories
{
    [TestFixture]
    public class EmployeeFactoryTests
    {
        private const EmployeeExperienceLevel experienceLevel = EmployeeExperienceLevel.Mid;
        private const string firstName = "Peter";
        private const string lastName = "Johnson";
        private Guid officeId = new Guid("d62ae4df-39ae-416a-1225-08d7ea8d2fb3");
        private const string profileImage = "profile_image.jpg";
        private const decimal salary = 4500;
        private const int vacationDays = 25;

        private EmployeeFactory _factory;

        [SetUp]
        public void SetUp()
        {
            _factory = new EmployeeFactory();
        }

        [Test]
        public void ReturnCreatedWebsite()
        {
            Assert.NotNull(RunFactoryCreate());
        }

        [Test]
        public void CheckIfCreatedWebsiteIsOfExpectedType()
        {
            Assert.IsInstanceOf(typeof(Employee), RunFactoryCreate());
        }

        [Test]
        public void CheckForCorrectlyBuiltValues()
        {
            var result = RunFactoryCreate();

            Assert.AreEqual(experienceLevel, result.ExperienceLevel);
            Assert.AreEqual(firstName, result.FirstName);
            Assert.AreEqual(lastName, result.LastName);
            Assert.AreEqual(officeId, result.OfficeId);
            Assert.AreEqual(profileImage, result.ProfileImage);
            Assert.AreEqual(salary, result.Salary);
            Assert.AreEqual(vacationDays, result.VacationDays);
        }

        private Employee RunFactoryCreate()
        {
            return _factory.Create(
              new EmployeeInputData()
              {
                  ExperienceLevel = experienceLevel,
                  FirstName = firstName,
                  LastName = lastName,
                  OfficeId = officeId,
                  ProfileImage = profileImage,
                  Salary = salary,
                  VacationDays = vacationDays,
              });
        }
    }
}
