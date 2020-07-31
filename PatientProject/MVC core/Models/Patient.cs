using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace HospitalManagementMVC.Models
{
    public class Patient
    {
        public int id { get; set; }

      
        public List<Problem> problems { get; set; }


    }

    public class Problem
    {
        public int id { get; set; }
        public string patientProblem { get; set; }

        
      public Patient patient { get; set; }
    }
}