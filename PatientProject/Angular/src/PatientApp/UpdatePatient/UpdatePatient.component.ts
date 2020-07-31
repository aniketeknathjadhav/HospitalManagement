// import { Component, Input, Output,EventEmitter } from '@angular/core';
// import { analyzeFileForInjectables } from '@angular/compiler';
// import { FormsModule } from "@angular/forms";
// import {RouterModule, Router} from "@angular/router" ;
// import {HttpClient} from '@angular/common/http';
// import { UpdatePatientModel } from './UpdatePatient.model';
// import { Problem } from '../PatientApp/PatientApp.model';


// @Component({
  
//   templateUrl: './SignupPatient.view.html',
  
// })
//  export class UpdatePatientComponent { 
//                        title = "HospitalManagement";
//                        patientObj: UpdatePatientModel = null;
//                        isMale:boolean=false;
//                        id:number=null;
//                        name:string=null;
//                        problemObj:Problem=null;
//     constructor(public Httpobj:HttpClient,public _router:Router){
//     this.patientObj  = new UpdatePatientModel();
//     this.problemObj = new Problem();
//    }

//    Gender(gender:string){
//    if(gender=="male"){
// this.patientObj.gender="Male";
//    }
//    else
//    {
//      this.patientObj.gender="Female";
//    }
//   }

//   AddProblem(){
//     this.patientObj.problems.push(this.problemObj);
//     this.problemObj = new Problem();
//     }

//     //**********************Add PAtient********************** */
//    Post(){
//     var pat: any={};
//     pat.id=this.patientObj.id;
//     pat.firstname=this.patientObj.firstName;
//     pat.lastname=this.patientObj.lastName;
//     pat.gender=this.patientObj.gender;
//     pat.email=this.patientObj.email;
//     pat.contact=this.patientObj.contact;
//     pat.problems=[];
//     pat.problems=this.patientObj.problems;

//     this.Httpobj.post("https://localhost:44325/api/SignupPatient"
//     ,pat)
//     .subscribe(res=> this.Success(res),
//     res=> this.Error(res));
    
//     // alert("this is patient" + " " + this.patientObj.patientName 
//     // + " " + "having" + " " + this.patientObj.patientProblem);
//   }
//   Success(res){
// alert("updated")  
// }

//   Error(res){

//   }

 


// }










// // import { Component, Input } from '@angular/core';
// // import { analyzeFileForInjectables } from '@angular/compiler';
// // import { FormsModule } from "@angular/forms";
// // import {RouterModule} from "@angular/router" ;
// // import {HttpClient} from '@angular/common/http';



// // import {PatientModel, Problem} from '../PatientApp/PatientApp.model'

// // @Component({
 
// //   templateUrl: './UpdatePatient.view.html',
  
// // })
// //  export class UpdatePatientComponent {
// //                        title = "HospitalManagement";
// //                        patientObj: PatientModel = null;
// //                        problemObj:Problem=null;
// //                         patientObjs: Array<PatientModel> = new Array<PatientModel>();
// //    constructor(public Httpobj:HttpClient){
// //     this.patientObj  = new PatientModel();
// //     this.problemObj = new Problem();
// //    }

// //    AddProblem(){
// //     this.patientObj.problems.push(this.problemObj);
// //     this.problemObj = new Problem();
// //     }
    
// //     //**********************Add PAtient********************** */
// //     Submit(){
// //       var pat: any={};
// //       pat.id=this.patientObj.id;
// //       // pat.patientName=this.patientObj.firstName;
// //       // pat.patientName=this.patientObj.lastName;
// //       pat.problems=[];
// //       pat.problems=this.patientObj.problems;
// //       // pat.contact=this.patientObj.contact;
  
// //       this.Httpobj.post("https://localhost:44325/api/PatientApi"
// //       ,pat)
// //       .subscribe(res=> this.Success(res),
// //       res=> this.Error(res));
      
// //       // alert("this is patient" + " " + this.patientObj.patientName 
// //       // + " " + "having" + " " + this.patientObj.patientProblem);
// //     }
// //     Success(res){
// //          this.patientObjs=res;
// //          this.patientObj=new PatientModel();
// //          this.problemObj=new Problem();
// //     }
  
// //     Error(res){
  
// //     }

// //   close(){

// //      }


    
  
// // }

