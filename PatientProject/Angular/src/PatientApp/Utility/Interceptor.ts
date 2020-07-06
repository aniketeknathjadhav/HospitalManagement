import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { LoginPatientModel } from '../LoginPatient/LoginPatient.model';
import { Observable } from 'rxjs';

@Injectable()
export class MyJwtInterceptor implements HttpInterceptor{
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

