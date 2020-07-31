import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';
import { FormsModule } from "@angular/forms";
import {RouterModule, Router} from "@angular/router" ;
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



import {PatientModel, Problem} from './PatientApp.model'


@Component({
 
  templateUrl: './PatientApp.view.html',
  
})
 export class PatientComponent implements OnInit { 
                       title = "HospitalManagement";
                       patientObj: PatientModel = null;
                       problemObj:Problem=null;
                      patientObjs: Array<PatientModel> = new Array<PatientModel>();
                      username:string="";
constructor(public Httpobj:HttpClient,public route:ActivatedRoute,public _route:Router){
    this.patientObj  = new PatientModel();
    this.problemObj = new Problem();
   }
  
   ngOnInit() {
    debugger
    this.route.queryParams
      .subscribe(params => {
        this.username = params.name;
        this.patientObj.id = params.id;
      });
  }

   AddProblem(){
   this.patientObj.problems.push(this.problemObj);
   this.problemObj = new Problem();
   }
     
  
  
    //**********************Add PAtient********************** */
   Submit(){
    var pat: any={};
    pat.id=this.patientObj.id;
    pat.problems=[];
    pat.problems=this.patientObj.problems;

    this.Httpobj.post("https://localhost:44325/api/PatientApi"
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

