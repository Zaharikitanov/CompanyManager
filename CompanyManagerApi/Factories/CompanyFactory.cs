using CompanyManagerApi.Factories.Interfaces;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;

namespace CompanyManagerApi.Factories
{
    public class CompanyFactory : ICompanyFactory
    {
        public Company Create(CompanyInputData viewData)
        {
            return new Company
            {
                Name = viewData.Name
            };
        }
    }
}
