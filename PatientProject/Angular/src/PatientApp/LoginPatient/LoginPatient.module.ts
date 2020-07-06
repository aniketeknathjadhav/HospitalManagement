import {NgModule} from '@angular/core'
import { LoginPatientComponent } from './LoginPatient.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginPatientRoute } from 'src/Routing/LoginPatientRouting';
import { LoginPatientModel } from './LoginPatient.model';
import { SecurityLogic } from '../Utility/AuthGuard';
import { MyJwtInterceptor } from '../Utility/Interceptor';

@NgModule({
declarations:[
    LoginPatientComponent
],
imports:[
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(LoginPatientRoute) 
],
providers:[],
bootstrap:[LoginPatientComponent]


})
export class LoginPatientModule{}