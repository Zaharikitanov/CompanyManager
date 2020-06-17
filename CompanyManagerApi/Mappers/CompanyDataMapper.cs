using AutoMapper;
using CompanyManagerApi.Mappers.Interfaces;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;

namespace CompanyManagerApi.Mappers
{
    public class CompanyDataMapper : ICompanyDataMapper
    {
        public CompanyViewData MapToViewModel(Company entity)
        {
            var configuration = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Company, CompanyViewData>();
            });

            var mapper = configuration.CreateMapper();

            return mapper.Map<CompanyViewData>(entity);
        }
    }
}
