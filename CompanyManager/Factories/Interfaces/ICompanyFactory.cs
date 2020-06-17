using CompanyManager.Models.Database;
using CompanyManager.Models.View;

namespace CompanyManager.Factories.Interfaces
{
    public interface ICompanyFactory
    {
        Company Create(CompanyInputData viewData);
    }
}