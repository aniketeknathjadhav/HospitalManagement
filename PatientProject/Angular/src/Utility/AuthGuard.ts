import {Injectable} from '@angular/core'
import {CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from  '@angular/router';
import {Observable} from 'rxjs';
import { LoginAdminModel } from 'src/Admin/LoginAdmin/LoginAdmin.model';
import { LoginPatientModel } from 'src/Patient/LoginPatient/LoginPatient.model';



@Injectable()
export class AdminSecurityLogic implements CanActivate
{

    constructor (private _router:Router , public _user:LoginAdminModel)
     {
    }

   canActivate(next:ActivatedRouteSnapshot,state: RouterStateSnapshot) : 
    Observable<boolean> | boolean
     {
        if(this._user.token.length!=0)
        {
        return true;
        }
    
        //navigate to login page
        this._router.navigate(['LoginAdmin/Admin']);
        //you can save redirect url so after authing we can move back to the 
        return false;
      }
}

@Injectable()
export class PatientSecurityLogic implements CanActivate
{

    constructor (private _router:Router , public _user:LoginPatientModel)
     {
    }

   canActivate(next:ActivatedRouteSnapshot,state: RouterStateSnapshot) : 
    Observable<boolean> | boolean
     {
        if(this._user.token.length!=0)
        {
        return true;
        }
    
        //navigate to login page
        this._router.navigate(['LoginPatient/Patient']);
        //you can save redirect url so after authing we can move back to the 
        return false;
      }
}