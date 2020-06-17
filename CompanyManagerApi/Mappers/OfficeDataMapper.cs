using AutoMapper;
using CompanyManagerApi.Mappers.Interfaces;
using CompanyManagerApi.Models.Database;
using CompanyManagerApi.Models.View;

namespace CompanyManagerApi.Mappers
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
