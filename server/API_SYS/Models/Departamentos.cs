using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace API_SYS.Models
{
    public partial class Departamentos
    {
        public Departamentos()
        {
            Usuarios = new HashSet<Usuarios>();
        }
        [Key]
        public int IdDepartamento { get; set; }
        public string departamento { get; set; }

        public ICollection<Usuarios> Usuarios { get; set; }
    }
}
