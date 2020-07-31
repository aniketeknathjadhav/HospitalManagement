import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginAdminModel } from '../LoginAdmin/LoginAdmin.model';
import { LoginPatientModel } from '../LoginPatient/LoginPatient.model';

@Injectable()
export class AdminInterceptor implements HttpInterceptor{
constructor (private _user : LoginAdminModel) {}

intercept(request: HttpRequest<any>, next :HttpHandler):
 Observable<HttpEvent<any>> {
//add authorization header with Jwt token if available
request = request.clone({
setHeaders:  {
Authorization : `Bearer ${this._user.token}`
}
});
return next.handle(request);
}
}

@Injectable()
export class PatientInterceptor implements HttpInterceptor{
constructor (private _user : LoginPatientModel) {}

intercept(request: HttpRequest<any>, next :HttpHandler):
 Observable<HttpEvent<any>> {
//add authorization header with Jwt token if available
request = request.clone({
setHeaders:  {
Authorization : `Bearer ${this._user.token}`
}
});
return next.handle(request);
}
}


