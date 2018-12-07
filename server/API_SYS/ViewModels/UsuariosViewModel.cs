using System.Collections.Generic;
using API_SYS.Models;
using System.ComponentModel.DataAnnotations;
using System;

namespace API_SYS.ViewModels
{
    public class UsuariosViewModel
    {

        public int IdUsuarios { get; set; }
        public string uidUsuarios { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public int Permissao { get; set; }
        public int? CargoId { get; set; }
        public int? DepartamentoId { get; set; }
        public string Cargo { get; set; }
        public string Departamento { get; set; }

        //[InverseProperty("Usuarios")]
        public Usuarios toModel(UsuariosViewModel vModel = null,Usuarios user = null){

            if(vModel != null){
                return new Usuarios()
                {
                    uidUsuarios = vModel.uidUsuarios,
                    IdUsuarios = vModel.IdUsuarios,
                    Nome = vModel.Nome,
                    Permissao = vModel.Permissao,
                    Email = vModel.Email,
                    CargoId = vModel.CargoId,

                    DepartamentoId = vModel.DepartamentoId
                };
            }

            if(user != null){
                return new Usuarios()
                {
                    IdUsuarios = user.IdUsuarios,
                    uidUsuarios = user.uidUsuarios,
                    Permissao = user.Permissao,
                    Nome = user.Nome,
                    Email = user.Email,
                    CargoId = user.CargoId,
                    DepartamentoId = user.DepartamentoId
                };
            }

            return new Usuarios()
            {
                Nome = Nome,
                Email = Email,
                CargoId = CargoId,
                DepartamentoId = DepartamentoId
            };

        }

        public UsuariosViewModel toView(Usuarios u, apiContext db){

            return new UsuariosViewModel
            {
                uidUsuarios = u.uidUsuarios,
                IdUsuarios = u.IdUsuarios,
                Nome = u.Nome,
                Email = u.Email,
                CargoId = u.CargoId,
                Cargo = db.Cargos.Find(u.CargoId).Cargo,
                DepartamentoId = u.DepartamentoId,
                Permissao = u.Permissao,
                Departamento = db.Departamentos.Find(u.DepartamentoId).departamento
            };
        }

        public List<UsuariosViewModel> getAll(List<Usuarios> users, apiContext db){
            List<UsuariosViewModel> list = new List<UsuariosViewModel>();
            foreach (var usr in users){
                list.Add(toView(usr, db));
            }
            return list;
        }
    }
}
