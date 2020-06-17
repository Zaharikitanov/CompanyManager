using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;

namespace CompanyManagerApi.Mappers.Interfaces
{
    public interface IOfficeDataMapper
    {
        OfficeViewData MapToViewModel(Office entity);
    }
}