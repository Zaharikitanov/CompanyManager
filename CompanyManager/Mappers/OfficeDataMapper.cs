using AutoMapper;
using CompanyManager.Mappers.Interfaces;
using CompanyManager.Models.Database;
using CompanyManager.Models.View;

namespace CompanyManager.Mappers
{
    public class OfficeDataMapper : IOfficeDataMapper
    {
        public OfficeViewData MapToViewModel(Office entity)
        {
            var configuration = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Office, OfficeViewData>();
            });

            var mapper = configuration.CreateMapper();

            return mapper.Map<OfficeViewData>(entity);
        }
    }
}
