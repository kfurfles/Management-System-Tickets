using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using API_SYS.Models;

namespace API_SYS.Controllers
{
    [Produces("application/json")]
    [Route("api/Cargos")]
    public class CargosController : Controller
    {
        private readonly apiContext db;

        public CargosController(apiContext _db)
        {
            db = _db;
        }

        [HttpGet]
        public IEnumerable<Cargos> Get()
        {
            return db.Cargos.ToList();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(db.Cargos.Where(s => s.IdCargos == id).FirstOrDefault());
        }
        

        [HttpPost]
        public IActionResult Post([FromBody] Cargos cargo)
        {
            db.Add(cargo);
            db.SaveChanges();
            return Ok(cargo);
        }
        

        [HttpPut("{id}")]
        public IActionResult Put(int id,[FromBody] Cargos cargo)
        {
            var dbCargo = db.Cargos.Where(s => s.IdCargos == id).FirstOrDefault();
            dbCargo.Cargo = cargo.Cargo;
            db.Update(dbCargo);
            db.SaveChanges();
            return Ok(dbCargo);
        }
        

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var dbCargo = db.Cargos.Where(s => s.IdCargos == id).FirstOrDefault();
            db.Remove(dbCargo);
            db.SaveChanges();
            return Ok();
        }
    }
}
