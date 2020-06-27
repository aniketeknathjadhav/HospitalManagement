using HospitalManagementMVC.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalManagementMVC.DAL
{
    public class PatientDal:DbContext 
    {
        private string constr;

        public PatientDal(string constr)
        {
            this.constr = constr;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //creating the connection string
        //should be in appsetting.json
        {
            optionsBuilder.UseSqlServer(constr);
            //optionsBuilder.UseSqlServer(@"Data Source=S18RNHN5;Initial Catalog=PatientDb;Integrated Security=True");
        }

        //mapping code below
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //insert pRimary key
            modelBuilder.Entity<PatientModel>().HasKey(a => a.id);
            // identity insert off code
            modelBuilder.Entity<PatientModel>().Property(e => e.id).ValueGeneratedNever();
            //this is the mapping code . map model with db
            modelBuilder.Entity<PatientModel>().ToTable("tblPatientList");
           
        }
        public DbSet<PatientModel> PatientModels { get; set; } //set the properties
    }
}
