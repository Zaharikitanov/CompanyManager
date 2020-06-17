using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;

namespace CompanyManagerApi.Factories.Interfaces
{
    public interface IEmployeeFactory
    {
        Employee Create(EmployeeInputData viewData);
    }
}