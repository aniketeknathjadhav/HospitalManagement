using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalManagementMVC.Models
{
    public class PatientModel
    {
       
        public int id { get; set; }
        
        public string patientName { get; set; }
        public string patientProblem { get; set; }
    }
}