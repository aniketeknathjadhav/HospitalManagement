using System;
using System.Collections.Generic;
using System.Linq;
using System.Resources;
using System.Threading.Tasks;
using HospitalManagementMVC.DAL;
using HospitalManagementMVC.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HospitalManagementMVC.Controllers
{
    [Authorize]
    [EnableCors("AllowOriginRule")]
    [Route("api/[controller]")]
    [ApiController]
    public class PatientApiController : ControllerBase
    {
        string constr = "";
        PatientDal pDal = null;
        

        public PatientApiController(IConfiguration configuration, PatientDal _pDal)
        {
            constr = configuration["ConnStr"];
            pDal = _pDal;
           
        }

        // GET: api/<PatientApiController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{

        //}





        //[EnableCors("AllowOriginRule")]
        //[HttpGet]
        //public string Get()
        //{
        //}


        [HttpPut]
        public IActionResult Put(Patient obj)
        {
            var pat = (from temp in pDal.Patients.Include(s=>s.problems)
                       where temp.patientId == obj.patientId
                       select temp).FirstOrDefault();

            if (pat != null)
            {
                pat.problems = obj.problems;
            }

            pDal.Update(pat); // first saves in memory
            pDal.SaveChanges();//then saves physically in sql
            List<Patient> recs = pDal.Patients.Include(p => p.problems).ToList<Patient>();

            return Ok(recs);
        }


       // PUT api/<PatientApiController>/5
       

        // DELETE api/<PatientApiController>/5
      



    }

   
        

        // POST api/<PatientApiController>/5


    
}
       
