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
    public class PatientDal:DbContext
    {
        public PatientDal(DbContextOptions<PatientDal> options) : base(options)
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
            modelBuilder.Entity<Patient>().HasKey(a => a.patientId);
            modelBuilder.Entity<Problem>().HasKey(a => a.problemId);

            //insert pRimary key
            //foreign key
            // identity insert off code
            modelBuilder.Entity<Patient>().Property(e => e.patientId).ValueGeneratedOnAdd();
            modelBuilder.Entity<Problem>().Property(e => e.problemId).UseIdentityColumn();
            modelBuilder.Entity<Doctor>().HasKey(a => a.doctorId);

            modelBuilder.Entity<Doctor>().Property(e => e.doctorId).UseIdentityColumn();
            modelBuilder.Entity<Patient>().HasIndex(e => e.email).IsUnique();
            modelBuilder.Entity<Patient>().HasIndex(e => e.userName).IsUnique(); 
            modelBuilder.Entity<Patient>().HasIndex(e => e.contact).IsUnique();
      
            // modelBuilder.Entity<Problem>().Property(e => e.problemId).ValueGeneratedOnAdd();
            //this is the mapping code . map model with db
            modelBuilder.Entity<Patient>().ToTable("PatientList");
            modelBuilder.Entity<Problem>().ToTable("ProblemList");
            modelBuilder.Entity<Doctor>().ToTable("DoctorList");
           

            //one to manny
            modelBuilder.Entity<Patient>()
                .HasMany(s=> s.problems)
                .WithOne(s=> s.patient)
                .HasForeignKey(s=> s.patientId_fk)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

        }

        public DbSet<Patient> Patients { get; set; }
        public DbSet<Doctor> Doctors { get; set; }

        //set the properties
    }
}
