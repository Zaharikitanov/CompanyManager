using AutoMapper;
using CompanyManager.Mappers.Interfaces;
using CompanyManager.Models.Database;
using CompanyManager.Models.View;

namespace CompanyManager.Mappers
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
