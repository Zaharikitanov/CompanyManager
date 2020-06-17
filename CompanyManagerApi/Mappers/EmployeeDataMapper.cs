using AutoMapper;
using CompanyManagerApi.Mappers.Interfaces;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;

namespace CompanyManagerApi.Mappers
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
