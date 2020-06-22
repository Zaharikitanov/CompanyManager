using CompanyManagerApi.Factories.Interfaces;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;

namespace CompanyManagerApi.Factories
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
                StreetNumber = viewData.StreetNumber,
                Documents = viewData.Documents
            };
        }
    }
}
