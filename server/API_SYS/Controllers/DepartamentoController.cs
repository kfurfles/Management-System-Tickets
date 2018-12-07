using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API_SYS.Models;

namespace API_SYS.Controllers
{
    [Produces("application/json")]
    [Route("api/Departamentos")]
    public class DepartamentoController : Controller
    {
        private readonly apiContext db;

        public DepartamentoController(apiContext _db)
        {
            db = _db;
        }

        [HttpGet]
        public IEnumerable<Departamentos> getAll()
        {
            return db.Departamentos.ToList();
        }

        [HttpGet("{id}")]
        public IActionResult get(int id){
            return Ok(db.Departamentos.Where(s => id == s.IdDepartamento).FirstOrDefault());
        }

        [HttpPost]
        public IActionResult Post([FromBody] Departamentos dep){
            db.Add(dep);
            db.SaveChanges();
            return Ok(dep);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id,[FromBody] Departamentos dep){
            var old = db.Departamentos.Where(s => id == s.IdDepartamento).FirstOrDefault();
            old.departamento = dep.departamento;
            db.Update(old);
            db.SaveChanges();
            return Ok(old);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id){
            var old = db.Departamentos.Where(s => s.IdDepartamento == id).FirstOrDefault();
            db.Remove(old);
            db.SaveChanges();
            return Ok(old);
        }
    }
}
