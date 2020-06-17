using CompanyManager.Models.Database;
using CompanyManager.Models.View;

namespace CompanyManager.Factories.Interfaces
{
    public interface IOfficeFactory
    {
        Office Create(OfficeInputData viewData);
    }
}