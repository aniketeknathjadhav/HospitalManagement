using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalManagementMVC.Models
{
    public class LoginPatientModel
    {
        public string userName { get; set; }
        public string password { get; set; }

        public string token { get; set; }
    }
}
