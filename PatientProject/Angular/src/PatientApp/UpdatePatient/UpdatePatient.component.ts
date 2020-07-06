import { Component, Input } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router" ;
import {HttpClient} from '@angular/common/http';



import {PatientModel} from '../PatientApp/PatientApp.model'

@Component({
 
  templateUrl: './UpdatePatient.view.html',
  
})
 export class UpdatePatientComponent {
  
                      alertPut:boolean=false;
                       title = "HospitalManagement";
                       patientObj: PatientModel = null;
                        patientObjs: Array<PatientModel> = new Array<PatientModel>();
   constructor(public Httpobj:HttpClient){
    this.patientObj  = new PatientModel();
   }

   
   Put(){
    var pat: any={};
   pat.id=this.patientObj.id;
   pat.patientName=this.patientObj.patientName;
   pat.patientProblem=this.patientObj.patientProblem;
   this.Httpobj.put("https://localhost:44325/api/PatientApi"
   ,pat)
   .subscribe(res=> this.SuccessPut(res),
   res=> this.ErrorPut(res));
   
   // alert("this is patient" + " " + this.patientObj.patientName 
   // + " " + "having" + " " + this.patientObj.patientProblem);
  }
  
  SuccessPut(res){
   
     this.alertPut=true;
     this.patientObjs=res;
         
  }
 
  ErrorPut(res){
 
  }

  close(){
    this.alertPut=false;

     }

    
  
}

