using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HospitalManagementMVC.DAL;
using HospitalManagementMVC.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HospitalManagementMVC.Controllers
{
    [EnableCors("AllowOriginRule")]
    [Route("api/[controller]")]
    [ApiController]
    public class PatientApiController : ControllerBase
    {
        string constr = "";

        public PatientApiController(IConfiguration configuration)
        {

            constr = configuration["ConnStr"];
        }

        // GET: api/<PatientApiController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{

        //}

        [EnableCors("AllowOriginRule")]
        // GET api/<PatientApiController>/5
        [HttpGet("{id}")]
        public IActionResult Get(string patientName)
        {
            PatientDal dal = new PatientDal(constr);
            List<PatientModel> search = (from temp in dal.PatientModels
                                         where temp.patientName == patientName
                                         select temp)
                                         .ToList<PatientModel>();
            
            return Ok(search);
        }

        [EnableCors("AllowOriginRule")]
        [HttpGet]
        public IActionResult Get()
        {
            // add more  var constr2 = configuration.GetConnectionString("ConString2");
            PatientDal dal = new PatientDal(constr);
            List<PatientModel> recs = dal.PatientModels.ToList<PatientModel>();
            return Ok(recs);
        }

        [EnableCors("AllowOriginRule")]
        // POST api/<PatientApiController>
        [HttpPost]
        public IActionResult Post( PatientModel obj)
        {
            // add more  var constr2 = configuration.GetConnectionString("ConString2");
            PatientDal dal = new PatientDal(constr);
            dal.Database.EnsureCreated(); // creates TblPatient
            dal.Add(obj); // first saves in memory
            dal.SaveChanges();//then saves physically in sql
            List<PatientModel> recs = dal.PatientModels.ToList<PatientModel>();
            return Ok(recs);
        }
    

        // PUT api/<PatientApiController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PatientApiController>/5
        [HttpDelete]
        public IActionResult Delete(string patientName)
        {
            PatientDal dal = new PatientDal(constr);
            var search = (from temp in dal.PatientModels
                                         where temp.patientName == patientName
                                         select temp)
                                         .FirstOrDefault();


            dal.PatientModels.Remove(search);
            dal.SaveChanges();
            return Ok(1);

        }

            
        
    }
}
