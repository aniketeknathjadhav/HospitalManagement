import {Component} from '@angular/core';
import { LoginPatientModel } from './LoginPatient.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
    selector:'',
    templateUrl:'./LoginPatient.view.html'
})
export class LoginPatientComponent{
 LoginSuccessfull:boolean =false;
constructor(public httpObj:HttpClient,public _user:LoginPatientModel,
  public _router:Router){
    

}

Post(){
this.httpObj.post("https://localhost:44325/api/Security"
,this._user)
.subscribe(res=> this.Success(res),
res=> this.Error(res));
}

Success(res){
  this.LoginSuccessfull=true;
  this._user.token=res.token;
  this._router.navigate(['/PatientApp/Add']);
  
}

Error(res){

}

close(){
  this.LoginSuccessfull=false;
  
}



}

