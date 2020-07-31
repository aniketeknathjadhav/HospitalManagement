using HospitalManagementMVC.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalManagementMVC.DAL
{
    public class SignupPatientDal:DbContext
    {
        public SignupPatientDal(DbContextOptions<SignupPatientDal> options) : base(options)
        {
        }

        

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //creating the connection string
        //should be in appsetting.json
        //{
        //optionsBuilder.UseSqlServer(constr);
        //optionsBuilder.UseSqlServer(@"Data Source=S18RNHN5;Initial Catalog=PatientDb;Integrated Security=True");


        //mapping code below
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //insert pRimary key
            modelBuilder.Entity<SignupPatientModel>().HasKey(a => a.id);
            //insert pRimary key
            //foreign key
            // identity insert off code
            modelBuilder.Entity<SignupPatientModel>().Property(e => e.id).ValueGeneratedOnAdd();
            modelBuilder.Entity<SignupPatientModel>().HasIndex(e => e.email).IsUnique();
            modelBuilder.Entity<SignupPatientModel>().HasIndex(e => e.userName).IsUnique(); 
            modelBuilder.Entity<SignupPatientModel>().HasIndex(e => e.contact).IsUnique();
            // modelBuilder.Entity<Problem>().Property(e => e.problemId).ValueGeneratedOnAdd();
            //this is the mapping code . map model with db
            modelBuilder.Entity<SignupPatientModel>().ToTable("SignupPatientList");
            
        }
        public DbSet<SignupPatientModel> SignupPatients { get; set; }

        //set the properties
    }
}
