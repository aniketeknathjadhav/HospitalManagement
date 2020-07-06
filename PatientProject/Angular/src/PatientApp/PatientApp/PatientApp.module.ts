import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';



import {PatientComponent} from '../PatientApp/PatientApp.component';
import { PatientRoutes } from 'src/Routing/PatientRouting';
import { CommonModule } from '@angular/common';
import { SecurityLogic } from '../Utility/AuthGuard';
import { LoginPatientModel } from '../LoginPatient/LoginPatient.model';
import { MyJwtInterceptor } from '../Utility/Interceptor';

@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule , FormsModule , 
    RouterModule.forChild(PatientRoutes),
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: MyJwtInterceptor , multi:true}],
  bootstrap: [PatientComponent]
})
export class PatientModule { }
