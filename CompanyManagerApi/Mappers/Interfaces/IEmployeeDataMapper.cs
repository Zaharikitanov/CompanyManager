using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;

namespace CompanyManagerApi.Mappers.Interfaces
{
    public interface IEmployeeDataMapper
    {
        EmployeeViewData MapToViewModel(Employee entity);
    }
}