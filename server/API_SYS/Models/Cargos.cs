using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace API_SYS.Models
{
    public partial class Cargos
    {
        public Cargos()
        {
            Usuarios = new HashSet<Usuarios>();
        }
        [Key]
        public int IdCargos { get; set; }
        public string Cargo { get; set; }

        public ICollection<Usuarios> Usuarios { get; set; }
    }
}
