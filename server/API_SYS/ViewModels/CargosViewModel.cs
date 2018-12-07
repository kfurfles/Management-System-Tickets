using System;
using API_SYS.Models;
using System.ComponentModel.DataAnnotations;

namespace API_SYS.ViewModels
{
    public class CargosViewModel
    {
        //public int IdCargos { get; set; }
        [Required(ErrorMessage = "Preencher o campo Cargo")]
        public string Cargo { get; set; }
        public Cargos c; 
        public CargosViewModel(Cargos _c){
            c = _c;
        }

        public CargosViewModel ModelView(Cargos c)
        {
            Cargo = c.Cargo;
            return this;
        }

        public Cargos ViewModel(CargosViewModel cViewModel){

            return c;
        }

    }
}
