import { Component } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router" ;
import {HttpClient} from '@angular/common/http';



import {PatientModel} from '../PatientApp/PatientApp.model'

@Component({
 
  templateUrl: './SearchPatient.view.html',
  
})
export class SearchPatientComponent {
  
title = "HospitalManagement";
patientName: string="";
patientModels: Array<PatientModel> = new Array<PatientModel>();
constructor(public Httpobj:HttpClient){


}

  Search(){
    this.Httpobj.get("https://localhost:44325/api/PatientApi/5?patientName="+this.patientName)
    .subscribe(res=> this.Success(res),
    res=> this.Error(res));
   
  }
  Success(res){
       this.patientModels=res;
  }    
 Error(res){

  }
}
