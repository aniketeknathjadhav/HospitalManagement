import { Component, Input, Output,EventEmitter } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router" ;
import {HttpClient} from '@angular/common/http';




import {AdminModel} from './AdminApp.model'
import { PatientModel , Problem} from '../PatientApp/PatientApp.model';


@Component({
 
  templateUrl: './AdminApp.view.html',
  
})
 export class AdminComponent { 
                       title = "HospitalManagement";
                       patientObj: AdminModel = null;
                       problemObj:Problem=null;
                       pat1:number= 0;
                      patientObjs: Array<AdminModel> = new Array<AdminModel>();
                      problemObjs: Array<PatientModel> = new Array<PatientModel>();

                      UpdateScreen:boolean=false;

constructor(public Httpobj:HttpClient){
    this.patientObj  = new AdminModel();
   this.problemObj = new Problem();
     this.SubmitGet();
   }

   AddProblem(){
   this.patientObj.problems.push(this.problemObj);
   this.problemObj = new Problem();
   }

   DeleteProblem(value){
    // remove particular array usig slice ad fididex
    this.patientObj.problems.splice(this.patientObj.problems.findIndex(v => v.patientProblem === value), 1);
  }
     
   //******************** GEt patients*********************** */
    SubmitGet(){
      this.Httpobj.get("https://localhost:44325/api/PatientApi?patientObj=")
    .subscribe(res=> this.SuccessGet(res),
    res=> this.ErrorGet(res));}
   
 
   SuccessGet(res){
       this.patientObjs=res;
   }    
   ErrorGet(res){

    }

   
  
// *********************Delete Patient************************************* 
 

Delete(pat:number){
  
  this.pat1= pat;
  this.Httpobj.delete("https://localhost:44325/api/PatientApi?id="
  +this.pat1)
  .subscribe(res=> this.SuccessDel(res),
  res=> this.ErrorDel(res));
  
  // alert("this is patient" + " " + this.patientObj.patientName 
  // + " " + "having" + " " + this.patientObj.patientProblem);
 }
 
 SuccessDel(res){
    if(res==1){
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
  
    //**********************Update PAtient********************** */

    Update(pat:any)
    {
      this.problemObj.patientProblem="";
      this.patientObj.id=pat.id;
      this.patientObj.firstName=pat.firstName
      this.patientObj.lastName=pat.lastName;
      this.patientObj.gender=pat.gender;
      this.patientObj.email=pat.email;
      this.patientObj.contact=pat.contact;
      this.patientObj.problems=pat.problems;
      this.UpdateScreen=true;
    }

    Put(){
      var pat: any={};
      pat.id=this.patientObj.id;
      pat.firstName=this.patientObj.firstName;
      pat.lastName=this.patientObj.lastName;
      pat.gender=this.patientObj.gender;
      pat.email=this.patientObj.email;
      pat.contact=this.patientObj.contact;
      pat.problems=[];
      pat.problems=this.patientObj.problems;
  
      this.Httpobj.put("https://localhost:44325/api/PatientApi"
      ,pat)
      .subscribe(res=> this.Success(res),
      res=> this.Error(res));
      
      // alert("this is patient" + " " + this.patientObj.patientName 
      // + " " + "having" + " " + this.patientObj.patientProblem);
    }

    Success(res){
  alert("updated")  
  this.UpdateScreen=false;
  this.SubmitGet();

  }
  
    Error(res){
  
    }






}

