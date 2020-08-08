using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalManagementMVC.Models
{
    public class Patient
    {
        public int patientId { get; set; }

        public string firstName { get; set; }
        public string lastName { get; set; }

        public string gender { get; set; }
        public string email { get; set; }
        public long contact { get; set; }
        public string userName { get; set; }

        public string password { get; set; }

        public List<Problem> problems { get; set; }

        //doctor foreign key
        public string doctor { get; set; }

    }

    public class Problem
    {
        public int problemId { get; set; }
        public string problem { get; set; }

        //patient foreign key
        public int patientId_fk { get; set; }
        public  Patient patient { get; set; }
    }

   
   
}
