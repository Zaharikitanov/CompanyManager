using System.Net;
using CompanyManagerApi.Models;

namespace CompanyManagerApi.Factories.Interfaces
{
    public interface IStatusCodeResultFactory
    {
        HttpStatusCode Create(EntityActionOutcome entityOutcome);
    }
}