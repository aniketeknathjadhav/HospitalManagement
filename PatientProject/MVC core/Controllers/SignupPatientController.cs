using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HospitalManagementMVC.DAL;
using HospitalManagementMVC.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HospitalManagementMVC.Controllers
{
    [EnableCors("AllowOriginRule")]

    [Route("api/[controller]")]
    [ApiController]
    public class SignupPatientController : ControllerBase
    {
        string constr = "";
        PatientDal pDal = null;
        public SignupPatientController(IConfiguration configuration, PatientDal _pDal)
        {
            constr = configuration["ConnStr"];
            pDal = _pDal;
        }
        // GET: api/<SignupPatientController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<SignupPatientController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [EnableCors("AllowOriginRule")]

        // POST api/<SignupPatientController>
        [HttpPost]
            public IActionResult Post(Patient obj)
            {

                pDal.Add(obj); // first saves in memory
                pDal.SaveChanges();//then saves physically in sql
                var result = pDal.Patients.Where(a => a.userName == obj.userName).FirstOrDefault();
               // List<SignupPatient> recs = sDal.SignupPatients.ToList<SignupPatient>();
                return Ok(result);
            }
        

        // PUT api/<SignupPatientController>/5
        [HttpPut]
        public void Put()
        {

        }

        // DELETE api/<SignupPatientController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
