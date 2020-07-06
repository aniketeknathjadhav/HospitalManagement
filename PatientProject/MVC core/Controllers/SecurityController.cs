using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using HospitalManagementMVC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Cors;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HospitalManagementMVC.Controllers
{
    [EnableCors("AllowOriginRule")]
    [Route("api/[controller]")] 
    [ApiController]
    public class SecurityController : ControllerBase
    {
        // GET: api/<ValuesController>
       
        

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        private string GenerateToken(string userName)
        {
            // Key
            var securityKey = new SymmetricSecurityKey
                (Encoding.UTF8.GetBytes("238420983409284098230948"));
            // Algorithm
            var credentials = new
                    SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // claimns
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, userName),
                new Claim(JwtRegisteredClaimNames.Email, ""),
                new Claim("Admin", "true"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

            var token = new JwtSecurityToken("finishingschool",
              "finishingschool",
              claims,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            string tokenstring = new JwtSecurityTokenHandler().WriteToken(token);
            return  tokenstring ;
        }
        // POST api/<ValuesController>
        [HttpPost]
        public IActionResult Post([FromBody] LoginPatientModel obj)
        {
            if (obj.userName == "Aniket" && obj.password == "@password123") 
            {
                obj.token = GenerateToken(obj.userName);
                obj.password = "";
                return Ok(obj);
            }

            else
            {
                return StatusCode(401, "This is not valid patient");
            }
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
