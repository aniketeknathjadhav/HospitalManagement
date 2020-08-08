using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HospitalManagementMVC.DAL;
using HospitalManagementMVC.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HospitalManagementMVC.Controllers
{
    [Authorize]
    [EnableCors("AllowOriginRule")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AdminApiController : ControllerBase
    {
        string constr = "";
        PatientDal pDal = null;

        public AdminApiController(IConfiguration configuration, PatientDal _pDal)
        {
            constr = configuration["ConnStr"];
            pDal = _pDal;

        }
        // GET: api/<AdminApiController>
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var doc = (from temp in pDal.Doctors
                       select new
                       {
                           doctor=temp.doctorName
                       }
                       ).ToList();

            return Ok(doc);
        }

        [ActionName("putDoc")]
        public IActionResult putDoc(Patient obj)
        {

            var pat2 = (from temp in pDal.Patients.Include(p => p.problems)
                        where temp.patientId == obj.patientId
                        select temp).FirstOrDefault();

            if (pat2 != null)
            {
                pat2.doctor = obj.doctor;
            }
            pDal.Update(pat2);
            pDal.SaveChanges();

            return Ok(pat2);
        }

        // GET api/<AdminApiController>/5
        [HttpGet]
        public IActionResult Get()
        {

            // var prob = dal.Patients.Include(p => p.problems).ToList();
            // var prob = dal.Problems.Include("patientProblem").ToList();

            var pat = (from pDal in pDal.Patients.Include(p => p.problems)
                       select new
                       {
                           problems = pDal.problems,
                           patientId = pDal.patientId,
                           firstName = pDal.firstName,
                           lastName = pDal.lastName,
                           contact = pDal.contact,
                           email = pDal.email,
                           gender = pDal.gender,
                           doctor = pDal.doctor
        }).ToList();

        

            // List<Patient> recs = dal.Patients.Include(p=> p.problems).ToList<Patient>();

            return Ok(pat);
        }

        // POST api/<AdminApiController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        [HttpPut]
        public IActionResult Put(Patient obj)
        {

            var pat2 = (from temp in pDal.Patients.Include(p => p.problems)
                        where temp.patientId == obj.patientId
                        select temp).FirstOrDefault();

            if (pat2 != null)
            {
                pat2.problems = obj.problems;
                pat2.firstName = obj.firstName;
                pat2.lastName = obj.lastName;
                pat2.gender = obj.gender;
                pat2.email = obj.email;
                pat2.contact = obj.contact;
                pat2.doctor = obj.doctor;
            }


            //Update sytax-  context.Products.Update(entity);

            pDal.Update(pat2);
            pDal.SaveChanges();

            return Ok(1);
        }

        // DELETE api/<AdminApiController>/5
        [HttpDelete]
        public IActionResult Delete(int id)
        {

            var pat = (from temp in pDal.Patients
                       where temp.patientId == id
                       select temp).FirstOrDefault();

            pDal.Remove(pat);
            pDal.SaveChanges();

            return Ok(1);



        }
    }
}
