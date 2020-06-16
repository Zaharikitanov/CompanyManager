using AutoMapper;
using CompanyManager.Mappers.Interfaces;
using CompanyManager.Models.Database;
using CompanyManager.Models.View;

namespace CompanyManager.Mappers
{
    public class EmployeeDataMapper : IEmployeeDataMapper
    {
        public EmployeeViewData MapToViewModel(Employee entity)
        {
            var configuration = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Employee, EmployeeViewData>();
            });

            var mapper = configuration.CreateMapper();

            return mapper.Map<EmployeeViewData>(entity);
        }
    }
}
