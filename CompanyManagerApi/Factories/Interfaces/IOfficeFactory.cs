using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;

namespace CompanyManagerApi.Factories.Interfaces
{
    public interface IOfficeFactory
    {
        Office Create(OfficeInputData viewData);
    }
}