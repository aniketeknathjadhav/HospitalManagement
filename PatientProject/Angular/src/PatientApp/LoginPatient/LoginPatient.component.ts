import {Component} from '@angular/core';
import { LoginPatientModel } from './LoginPatient.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/api';



@Component({
    selector:'',
    templateUrl:'./LoginPatient.view.html',
    providers: [MessageService]

})
export class LoginPatientComponent{
 name:string="";
 id:number=0;
 SignupError:boolean=false;
 msgs: Message[] = [];

constructor(public httpObj:HttpClient,public _user:LoginPatientModel,
  public _router:Router,public messageService: MessageService){
    

}

Post(){
var dto:any={};
dto.id=this._user.id;
dto.password=this._user.password
dto.userName=this._user.userName;
dto.token=this._user.token;
this.httpObj.post("https://localhost:44325/api/Security/"
,dto)
.subscribe(res=> this.Success(res),
    res=> this.Error(res));
}

show() {
 
 this.messageService.add({severity:'info',
   summary:'You have not registered', detail:'Please click SignUp'});
}

hide() {
    this.messageService.clear();

}


Success(res){
  this._user.token=res.token;
  this.id=res.id;
  this.name=res.userName; 
  this._router.navigate(['/PatientApp/App'], {queryParams:{name: this.name, id: this.id,}});
  //this._router.navigate(['/Signup']);

}

Error(res){
  debugger
  this.SignupError=true;
}





}

