using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using Mvc.Post_Graphs_Dynatable.Web.UI.Models;

namespace Mvc.Post_Graphs_Dynatable.Web.UI.Controllers
{
    public class TestandoController : Controller
    {
        // GET: Testando
        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public JsonResult ActionPost(String valor)
        {
            Thread.Sleep(5000);
            return Json(valor);
        }

        [HttpPost]
        public JsonResult ActionGraphsPost()
        {
            List<Pessoa> result = ListaPessoas();
            return Json(result);
        }

        private List<Pessoa> ListaPessoas()
        {
            return new List<Pessoa>()
            {
                new Pessoa{Nome = "Teste1",Sobrenome = "Teste Sobrenome1"},
                new Pessoa{Nome = "Teste2",Sobrenome = "Teste Sobrenome2"},
                new Pessoa{Nome = "Teste3",Sobrenome = "Teste Sobrenome3"},
            };
        }



    }
}