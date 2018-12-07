using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API_SYS.Models;
using API_SYS.ViewModels;
using System.Web;

namespace API_SYS.Controllers
{
    [Produces("application/json")]
    [Route("api/Usuarios")]
    public class UsuariosController : Controller
    {
        private readonly apiContext db;
        private readonly UsuariosViewModel vm = new UsuariosViewModel();

        public UsuariosController(apiContext _db){
            db = _db;
        }

        // GET: api/Usuarios
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = db.Usuarios.ToList();
            return Ok(vm.getAll(list, db));
        }

        // GET: api/Usuarios/5
        [HttpGet]
        [Route("{id}")]
        public IActionResult GetById(int id)
        {
            var user = db.Usuarios.Where(s => s.IdUsuarios == id).FirstOrDefault(); 

            if(user != null){
                return Ok(vm.toView(user, db));
            } else {
                return Ok("{}");
            }
        }

        // GET: api/Usuarios/joao@gmail.com
        [HttpGet]
        [Route("email")]
        public IActionResult GetByEmail(string email)
         {
            var user = db.Usuarios.Where(s => s.Email == email).FirstOrDefault();

            if (user != null)
            {
                return Ok(vm.toView(user, db));
            }
            else
            {
                return Ok("{}");
            }
        }

        // POST: api/Usuarios
        /// <summary>
        /// Create a assessment
        /// </summary>
        /// <param name="user"></param>
        [HttpPost]
        public IActionResult Create([FromBody] UsuariosViewModel user)
        {
            var newUser = user.toModel();
            newUser.uidUsuarios = user.uidUsuarios;
            newUser.Permissao = user.Permissao;
            db.Usuarios.Add(newUser);
            db.SaveChanges();
            return Ok(newUser);
        }

        // PUT: api/Usuarios/5
        /// <summary>
        /// Update a assessment
        /// </summary>
        /// <param name="user"></param>
        [HttpPut]
        [Route("{id}")]
        public IActionResult Update(int id, [FromBody]UsuariosViewModel user)
        {
            var old = db.Usuarios.Where(s => s.IdUsuarios == id).FirstOrDefault();
            if(old != null){
                old.Nome = user.Nome;
                old.Email = user.Email;
                old.CargoId = user.CargoId;
                old.DepartamentoId = user.DepartamentoId;
                old.Permissao = user.Permissao;

                db.Update(old);
                db.SaveChanges();

                return Ok(old);
            }
            return Ok("{}");
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            var old = db.Usuarios.Where(s => s.IdUsuarios == id).FirstOrDefault();
            if (old != null)
            {
                db.Remove(old);
                db.SaveChanges();
                return Ok(old);
            }
            return Ok("{}");
        }
    }
}
