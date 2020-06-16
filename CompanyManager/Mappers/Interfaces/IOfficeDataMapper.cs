using CompanyManager.Models.Database;
using CompanyManager.Models.View;

namespace CompanyManager.Mappers.Interfaces
{
    public interface IOfficeDataMapper
    {
        OfficeViewData MapToViewModel(Office entity);
    }
}