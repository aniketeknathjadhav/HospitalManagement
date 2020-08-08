//using HospitalManagementMVC.Models;
//using Microsoft.EntityFrameworkCore;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace HospitalManagementMVC.DAL
//{
//    public class DoctorDal : DbContext
//    {
//        public DoctorDal(DbContextOptions<DoctorDal> options) : base(options)
//        {
//        }



//        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        //creating the connection string
//        //should be in appsetting.json
//        //{
//        //optionsBuilder.UseSqlServer(constr);
//        //optionsBuilder.UseSqlServer(@"Data Source=S18RNHN5;Initial Catalog=PatientDb;Integrated Security=True");


//        //mapping code below
//        protected override void OnModelCreating(ModelBuilder modelBuilder)
//        {
//            //insert pRimary key
           
//            modelBuilder.Entity<Doctor>().HasKey(a => a.doctorId);

//            modelBuilder.Entity<Doctor>().Property(e => e.doctorId).UseIdentityColumn();
//             modelBuilder.Entity<Doctor>().ToTable("DoctorList");

//            //one to manny
//            modelBuilder.Entity<Doctor>()
//                .HasMany(s => s.patients)
//                .WithOne(s => s.doctor)
//                .HasForeignKey(s => s.doctorId_fk)
//                .IsRequired()
//                .OnDelete(DeleteBehavior.Cascade);
//        }
//        public DbSet<Doctor> Doctors { get; set; }





//        //set the properties
//    }
//}

