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
        SignupPatientDal sDal = null;

        public PatientApiController(IConfiguration configuration, PatientDal _pDal, SignupPatientDal _sDal)
        {
            constr = configuration["ConnStr"];
            pDal = _pDal;
            sDal = _sDal;
        }

        // GET: api/<PatientApiController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{

        //}





        [EnableCors("AllowOriginRule")]
        [HttpGet]
        public IActionResult Get()
        {
            // var prob = dal.Patients.Include(p => p.problems).ToList();
            // var prob = dal.Problems.Include("patientProblem").ToList();

             var pat = (from pDal in pDal.Patients.Include(p => p.problems)
                       select pDal).ToList();

            var result = (from p in pat
                          join sDal in sDal.SignupPatients
                          on p.id equals sDal.id
                          select new {
                              problems = p.problems,
                              id = sDal.id,
                              firstName = sDal.firstName,
                              lastName = sDal.lastName,
                              contact = sDal.contact,
                              email = sDal.email,
                              gender = sDal.gender
                          }).ToList();
            

            // List<Patient> recs = dal.Patients.Include(p=> p.problems).ToList<Patient>();

            return Ok(result);
        }


        [HttpPost]
        public IActionResult Post(Patient obj)
        {

            pDal.Add(obj); // first saves in memory
            pDal.SaveChanges();//then saves physically in sql
            List<Patient> recs = pDal.Patients.Include(p => p.problems).ToList<Patient>();

            return Ok(recs);
        }


       // PUT api/<PatientApiController>/5
         [HttpPut]
        public IActionResult Put(AdminPatientModel obj)
        {

            var pat = (from temp in pDal.Patients.Include(p => p.problems)
                       where temp.id == obj.id
                          select temp)
                                         .FirstOrDefault();

            var pat2 = (from temp in sDal.SignupPatients
                          where temp.id == obj.id
                          select temp)
                                        .FirstOrDefault();
            if(pat != null)
            {
                pat.problems = obj.problems;
            }

            if(pat2 != null)
            {
                pat2.firstName = obj.firstName;
                pat2.lastName = obj.lastName;
                pat2.gender = obj.gender;
                pat2.email = obj.email;
                pat2.contact = obj.contact;
            }

           //Update sytax-  context.Products.Update(entity);

            pDal.Patients.Update(pat);
            pDal.SaveChanges();
            sDal.SignupPatients.Update(pat2);
            sDal.SaveChanges();
            return Ok(1);
        }

        // DELETE api/<PatientApiController>/5
        [HttpDelete]
        public IActionResult Delete(int id)
        {

            var pat = (from temp in pDal.Patients
                       where temp.id == id
                          select temp)
                                         .FirstOrDefault();

            var sign= (from temp in sDal.SignupPatients
                       where temp.id == id
                       select temp)
                                         .FirstOrDefault();

            pDal.Patients.Remove(pat);
            pDal.SaveChanges();
            sDal.SignupPatients.Remove(sign);
            sDal.SaveChanges();
            return Ok(1);

        }



    }

   
        

        // POST api/<PatientApiController>/5


    
}
       
