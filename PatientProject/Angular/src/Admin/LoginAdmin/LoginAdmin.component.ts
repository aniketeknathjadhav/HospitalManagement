import {Component} from '@angular/core';
import { LoginAdminModel } from './LoginAdmin.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
    selector:'',
    templateUrl:'./LoginAdmin.view.html'
})
export class LoginAdminComponent{
 LoginSuccessfull:boolean =false;
constructor(public httpObj:HttpClient,public _user:LoginAdminModel,
  public _router:Router){
    

}

Post(){
this.httpObj.post("https://localhost:44325/api/Security/1"
,this._user)
.subscribe(res=> this.Success(res),
res=> this.Error(res));
}

Success(res){
  this._user.token=res.token;
  this._router.navigate(['/AdminApp/App'] );
  
}

Error(res){

}

close(){
  
}



}

