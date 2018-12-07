using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace API_SYS.Models
{
    public partial class Chamados
    {
        public Chamados(){

        }
        [Key]
        public int IdChamados { get; set; }

        // 1 = nao respondida
        // 2 = com resposta
        // 3 = fechada
        public string Status { get; set; }
        public string Description { get; set; }
        public string Informations { get; set; }
        public int Alert { get; set; }
        public int UsuarioId { get; set; }
        public DateTime criado { get; set; }
        public DateTime ultimaAtualizacao { get; set; }

        public Usuarios Usuario { get; set; }
    }
}
