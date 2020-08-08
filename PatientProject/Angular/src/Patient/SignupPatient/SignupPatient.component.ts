import { Component, Input, Output,EventEmitter } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';
import { FormsModule } from "@angular/forms";
import {RouterModule, Router} from "@angular/router" ;
import {HttpClient} from '@angular/common/http';
import { SignupPatientModel } from './SignupPatient.model';


@Component({
  
  templateUrl: './SignupPatient.view.html',
  
})
 export class SignupPatientComponent { 
                       title = "HospitalManagement";
                       patientObj: SignupPatientModel = null;
                       isMale:boolean=false;
    constructor(public Httpobj:HttpClient,public _router:Router){
    this.patientObj  = new SignupPatientModel();
   }

   Gender(gender:string){
   if(gender=="male"){
this.patientObj.gender="Male";
   }
   else
   {
     this.patientObj.gender="Female";
   }
  }

    //**********************Add PAtient********************** */
   Post(){
    var pat: any={};
    pat.patientId=this.patientObj.patientId;
    pat.firstname=this.patientObj.firstName;
    pat.lastname=this.patientObj.lastName;
    pat.gender=this.patientObj.gender;
    pat.email=this.patientObj.email;
    pat.contact=this.patientObj.contact;
    pat.userName=this.patientObj.userName;
    pat.password=this.patientObj.password;

    this.Httpobj.post("https://localhost:44325/api/SignupPatient"
    ,pat)
    .subscribe(res=> this.Success(res),
    res=> this.Error(res));
    
    // alert("this is patient" + " " + this.patientObj.patientName 
    // + " " + "having" + " " + this.patientObj.patientProblem);
  }
  Success(res){
    this._router.navigate(['/LoginPatient/Patient']);
  }

  Error(res){

  }

 


}

