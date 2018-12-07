using System;
using System.ComponentModel.DataAnnotations;
using API_SYS.Models;


namespace API_SYS.ViewModels
{
    public class ChamadosViewModel
    {
        public int IdChamados { get; set; }

        [Required]
        public string Status { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int UsuarioId { get; set; }

        public string Informations { get; set; }

        public int Alert { get; set; }
        [Required]
        public DateTime criado { get; set; }
        public DateTime ultimaAtualizacao { get; set; }

        public ChamadosViewModel()
        {
        }

        public Chamados toModel(ChamadosViewModel u,apiContext db){
            return new Chamados()
            {
                IdChamados = u.IdChamados,
                Status = u.Status,
                Description = u.Description,
                UsuarioId = u.UsuarioId,
                Alert = u.Alert,
                Informations = u.Informations,
                criado = u.criado,
                ultimaAtualizacao = u.ultimaAtualizacao
            };
        }
    }
}
