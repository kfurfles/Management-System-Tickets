using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace API_SYS.Models
{
    public partial class Usuarios
    {
        public Usuarios()
        {
            Chamados = new HashSet<Chamados>();
        }

        public int IdUsuarios { get; set; }
        public string uidUsuarios { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        // Comum : 1  Admin : 2
        public int Permissao { get; set; }
        public int? CargoId { get; set; }
        public int? DepartamentoId { get; set; }

        public Cargos Cargo { get; set; }
        public Departamentos Departamento { get; set; }
        public ICollection<Chamados> Chamados { get; set; }
    }
}
