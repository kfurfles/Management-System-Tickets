using AutoMapper;
using API_SYS.Models;
using API_SYS.ViewModels;

namespace API_SYS.Mappers
{
    public class AutoMapperConfig
    {
        //public static IMapper Mapper { get; private set; }
        //public static void RegisterMappings();

        public static void RegisterMappings()
        {
            Mapper.Initialize(x =>
            {
                x.CreateMap<Cargos, CargosViewModel>();
            });
        }
    }
}
