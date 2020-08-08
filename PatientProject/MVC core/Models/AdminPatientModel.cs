using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalManagementMVC.Models
{
    public class AdminPatient
    {
        public int patientId { get; set; }

        public string firstName { get; set; }
        public string lastName { get; set; }

        public string gender { get; set; }
        public string email { get; set; }
        public long contact { get; set; }

        public List<Problem> problems { get; set; }
    }

   
    }
