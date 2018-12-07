using System;
using API_SYS.Models;
namespace API_SYS.Repository
{
    public class UserRepository
    {
        public UserRepository()
        {

        }

        public Usuarios updateUser(Usuarios from){
            return new Usuarios()
            {
                IdUsuarios = from.IdUsuarios,
                Nome = from.Email,
                Email = from.Email,
                CargoId = from.CargoId,
                DepartamentoId = from.DepartamentoId
            };
        }
    }
}
