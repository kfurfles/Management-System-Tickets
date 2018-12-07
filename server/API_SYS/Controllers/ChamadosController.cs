using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using API_SYS.Models;
using API_SYS.ViewModels;

namespace API_SYS.Controllers
{
    [Produces("application/json")]
    [Route("api/Chamados")]
    public class ChamadosController : Controller
    {
        private readonly apiContext db;

        public ChamadosController(apiContext _db)
        {
            db = _db;
        }

        [HttpGet]
        public IActionResult getAll(int idUsuario = 0){
            if(idUsuario != 0){
                return Ok(db.Chamados.Where(s => s.UsuarioId == idUsuario).ToList());
            }else {
                return Ok(db.Chamados.ToList());
            }
        }

        [HttpGet("{id}")]
        public IActionResult getById(int id){
            var chamado = db.Chamados.Where(s => s.IdChamados == id).FirstOrDefault();
            if(chamado != null){
                return Ok(chamado);
            } else{
                return Ok("{}");
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody] ChamadosViewModel chamado){
            var novoChamado = chamado.toModel(chamado, db);
            db.Add(novoChamado);
            db.SaveChanges();
            return Ok(novoChamado);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id,[FromBody] ChamadosViewModel chamado){
            var novoChamado = db.Chamados.Where(s => s.IdChamados == id).FirstOrDefault();
            if(novoChamado != null){
                novoChamado.Status = chamado.Status;
                novoChamado.Description = chamado.Description;
                novoChamado.UsuarioId = chamado.UsuarioId;
                db.Update(novoChamado);
                db.SaveChanges();
                return Ok(novoChamado);
            } else {
                return Ok("{}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id){
            var chamado = db.Chamados.Where(s => s.IdChamados == id).FirstOrDefault();
            if(chamado != null){
                db.Remove(chamado);
                db.SaveChanges();
                return Ok(chamado);
            } else {
                return Ok();
            }
        }

        [HttpPatch]
        [Route("active/{id}")]
        public IActionResult setAlertActive(int id)
        {
            var chamado = db.Chamados.Where(s => s.IdChamados == id).FirstOrDefault();
            chamado.Alert = 1;
            chamado.Status = "1";
            db.Update(chamado);
            db.SaveChanges();
            return Ok(chamado);
        }

        [HttpPatch]
        [Route("deactive/{id}")]
        public IActionResult setAlertDeactive(int id)
        {
            var chamado = db.Chamados.Where(s => s.IdChamados == id).FirstOrDefault();
            chamado.Alert = 0;
            db.Update(chamado);
            db.SaveChanges();
            return Ok(chamado);
        }

        [HttpPatch]
        [Route("close/{id}")]
        public IActionResult setClose(int id)
        {
            var chamado = db.Chamados.Where(s => s.IdChamados == id).FirstOrDefault();
            chamado.Status = "2";
            db.Update(chamado);
            db.SaveChanges();
            return Ok(chamado);
        }

        [HttpPatch]
        [Route("reopen/{id}")]
        public IActionResult setOpen(int id,string status)
        {
            var chamado = db.Chamados.Where(s => s.IdChamados == id).FirstOrDefault();
            chamado.Status = status;
            db.Update(chamado);
            db.SaveChanges();
            return Ok(chamado);
        }

    }
}
