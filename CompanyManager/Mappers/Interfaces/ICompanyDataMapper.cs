using CompanyManager.Models.Database;
using CompanyManager.Models.View;

namespace CompanyManager.Mappers.Interfaces
{
    public interface ICompanyDataMapper
    {
        CompanyViewData MapToViewModel(Company entity);
    }
}