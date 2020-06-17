using CompanyManager.Factories.Interfaces;
using CompanyManager.Models.Database;
using CompanyManager.Models.View;

namespace CompanyManager.Factories
{
    public class OfficeFactory : IOfficeFactory
    {
        public Office Create(OfficeInputData viewData)
        {
            return new Office
            {
                City = viewData.City,
                CompanyId = viewData.CompanyId,
                Country = viewData.Country,
                IsHeadquarters = viewData.IsHeadquarters,
                Street = viewData.Street,
                StreetNumber = viewData.StreetNumber
            };
        }
    }
}
