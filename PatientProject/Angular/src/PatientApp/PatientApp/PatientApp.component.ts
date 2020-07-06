import { Component, Input, Output,EventEmitter } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router" ;
import {HttpClient} from '@angular/common/http';




import {PatientModel} from './PatientApp.model'


@Component({
 
  templateUrl: './PatientApp.view.html',
  
})
 export class PatientComponent {
                      alertDel:boolean=false; 
                      alertPost:boolean=false; 
                       title = "HospitalManagement";
                       patientObj: PatientModel = null;
                       pat1:string= "";
                       pat2:number= 0;
                      patientObjs: Array<PatientModel> = new Array<PatientModel>();
   constructor(public Httpobj:HttpClient){
    this.patientObj  = new PatientModel();
    this.SubmitGet();
   }

   
    SubmitGet(){
      this.Httpobj.get("https://localhost:44325/api/PatientApi?patientObj=")
    .subscribe(res=> this.SuccessGet(res),
    res=> this.ErrorGet(res));}
   
  
   SuccessGet(res){
       this.patientObjs=res;
   }    
   ErrorGet(res){

    }
  
    //**********************Add PAtient********************** */
   Submit(){
    var pat: any={};
    pat.id=this.patientObj.id;
    pat.patientName=this.patientObj.patientName;
    pat.patientProblem=this.patientObj.patientProblem;

    this.Httpobj.post("https://localhost:44325/api/PatientApi"
    ,pat)
    .subscribe(res=> this.Success(res),
    res=> this.Error(res));
    
    // alert("this is patient" + " " + this.patientObj.patientName 
    // + " " + "having" + " " + this.patientObj.patientProblem);
  }
  Success(res){
       this.alertPost=true; 
       this.patientObjs=res;
       this.patientObj=new PatientModel();
  }

  Error(res){

  }

  //*********************Delete Patient************* */
 Delete(pat:string){
  
  this.pat1= pat;
  this.Httpobj.delete("https://localhost:44325/api/PatientApi?patientName="
  +this.pat1)
  .subscribe(res=> this.SuccessDel(res),
  res=> this.ErrorDel(res));
  
  // alert("this is patient" + " " + this.patientObj.patientName 
  // + " " + "having" + " " + this.patientObj.patientProblem);
 }
 
 SuccessDel(res){
    if(res==1){
     this.alertDel=true;
     this.SubmitGet();
    }
        
 }

 ErrorDel(res){

 }

//  @Output() 
//  eventEmitter: EventEmitter<Object> = new EventEmitter<Object>();
// Update(){
//   var pat: any={};
//   pat.id=this.patientObj.id;
//   pat.patientName=this.patientObj.patientName;
//   pat.patientProblem=this.patientObj.patientProblem;
//   this.eventEmitter.emit(pat);
  


close(){
  this.alertDel=false;
  this.alertPost=false; 
}



}

