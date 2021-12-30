using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using react_typescript_esbuild.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace react_typescript_esbuild.Controllers
{
    public class PeopleController : Controller
    {
        [HttpGet]
        public IActionResult Create()
        {
            var people = new PersonViewModel[] {
                new PersonViewModel { Id = 1, Name = "Mark" }
            };
            return View(people);
        }

        [HttpPost]
        public IActionResult Create([FromForm] PersonViewModel[] people)
        {
            throw new Exception("Do whatever you feel like with the data");

            return View(people);
        }
    }
}
