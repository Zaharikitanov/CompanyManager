using CompanyManager.Models.Database;
using CompanyManager.Models.View;

namespace CompanyManager.Factories.Interfaces
{
    public interface IEmployeeFactory
    {
        Employee Create(EmployeeInputData viewData);
    }
}