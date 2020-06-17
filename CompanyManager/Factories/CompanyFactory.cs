using CompanyManager.Factories.Interfaces;
using CompanyManager.Models.Database;
using CompanyManager.Models.View;

namespace CompanyManager.Factories
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
