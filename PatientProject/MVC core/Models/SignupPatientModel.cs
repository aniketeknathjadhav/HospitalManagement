using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalManagementMVC.Models
{
    public class SignupPatientModel
    {
        public int id { get; set; }

        public string firstName { get; set; }
        public string lastName { get; set; }

        public string gender { get; set; }
        public string email { get; set; }
        public int contact { get; set; }
        public string userName { get; set; }

        public string password { get; set; }

    }
}
