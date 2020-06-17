using System.Net;
using CompanyManager.Models;

namespace CompanyManager.Factories.Interfaces
{
    public interface IStatusCodeResultFactory
    {
        HttpStatusCode Create(EntityActionOutcome entityOutcome);
    }
}