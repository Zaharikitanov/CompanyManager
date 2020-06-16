using CompanyManager.Models.Database;
using CompanyManager.Models.View;

namespace CompanyManager.Mappers.Interfaces
{
    public interface IEmployeeDataMapper
    {
        EmployeeViewData MapToViewModel(Employee entity);
    }
}