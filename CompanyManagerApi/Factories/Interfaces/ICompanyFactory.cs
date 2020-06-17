using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;

namespace CompanyManagerApi.Factories.Interfaces
{
    public interface ICompanyFactory
    {
        Company Create(CompanyInputData viewData);
    }
}