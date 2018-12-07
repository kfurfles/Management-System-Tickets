using API_SYS.Models;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace API_SYS.Context
{
    public class InitializeDb 
    {
        public static void Seed(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cargos>().HasData(
                new Cargos { IdCargos = 1, Cargo = "Vendedor" },
                new Cargos { IdCargos = 2, Cargo = "Pedagogo" },
                new Cargos { IdCargos = 3, Cargo = "Pedagogo II" },
                new Cargos { IdCargos = 4, Cargo = "Copeira" },
                new Cargos { IdCargos = 5, Cargo = "Gerente Financeiro" },
                new Cargos { IdCargos = 6, Cargo = "Gerente de Tecnologia" },
                new Cargos { IdCargos = 7, Cargo = "Programador" }
            );

            modelBuilder.Entity<Departamentos>().HasData(
                new Departamentos { IdDepartamento = 1, departamento = "Financeiro" },
                new Departamentos { IdDepartamento = 2, departamento = "Assessoria" },
                new Departamentos { IdDepartamento = 3, departamento = "Juridico" },
                new Departamentos { IdDepartamento = 4, departamento = "Tecnlogia" },
                new Departamentos { IdDepartamento = 5, departamento = "Vendas" }
            );

            modelBuilder.Entity<Usuarios>().HasData(
                new Usuarios{ 
                    IdUsuarios = 1,
                    uidUsuarios = "jSM6Yak6g8XGKKI5xnfqcNNhs8B3", 
                    Nome = "Kelvin Silva", 
                    Email = "kelvinsilva.ksv@gmail.com", 
                    Permissao = 2,
                    CargoId = 7, 
                    DepartamentoId = 4 
                }
            );
        }
    }
}
