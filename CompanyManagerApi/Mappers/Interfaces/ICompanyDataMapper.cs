using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;

namespace CompanyManagerApi.Mappers.Interfaces
{
    public interface ICompanyDataMapper
    {
        CompanyViewData MapToViewModel(Company entity);
    }
}