import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';
import { FormsModule } from "@angular/forms";
import {RouterModule, Router} from "@angular/router" ;
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Problem,PatientApp } from './PatientApp.model';






@Component({
 
  templateUrl: './PatientApp.view.html',
  
})
 export class PatientComponent implements OnInit { 
                       title = "HospitalManagement";
                       patientObj: PatientApp = null;
                       problemObj:Problem=null;
                      patientObjs: Array<PatientApp> = new Array<PatientApp>();
                      username:string="";
constructor(public Httpobj:HttpClient,public route:ActivatedRoute,public _route:Router){
    this.patientObj  = new PatientApp();
    this.problemObj = new Problem();
   }
  
   ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.username = params.name;
        this.patientObj.patientId = params.id;
      });
  }

   AddProblem(){
   this.patientObj.problems.push(this.problemObj);
   this.problemObj = new Problem();
   }
     
  
  
    //**********************Update Problem********************** */
   Submit(){
    var pat: any={};
    pat.patientId=this.patientObj.patientId;
    pat.problems=[];
    pat.problems=this.patientObj.problems;

    this.Httpobj.put("https://localhost:44325/api/PatientApi"
    ,pat)
    .subscribe(res=> this.Success(res),
    res=> this.Error(res));
    
 
  }
  Success(res){
   alert("problems added")
   this._route.navigate(['/Home']);
  }

  Error(res){

  }





}

