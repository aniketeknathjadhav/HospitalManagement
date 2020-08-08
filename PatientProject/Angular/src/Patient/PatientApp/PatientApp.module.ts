import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';



import {PatientComponent} from '../PatientApp/PatientApp.component';
import { PatientRoutes } from 'src/Routing/PatientRouting';
import { CommonModule } from '@angular/common';

import { LoginPatientModel } from '../LoginPatient/LoginPatient.model';
import { PrimeNgModule } from 'src/Utility/PrimeNg.module';
import { PatientSecurityLogic } from 'src/Utility/AuthGuard';
import { PatientInterceptor } from 'src/Utility/Interceptor';

@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule , FormsModule , 
    RouterModule.forChild(PatientRoutes),PrimeNgModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [PatientSecurityLogic,
    {provide:HTTP_INTERCEPTORS, useClass: PatientInterceptor , multi:true}
  ],
  bootstrap: [PatientComponent]
})
export class PatientModule { }
