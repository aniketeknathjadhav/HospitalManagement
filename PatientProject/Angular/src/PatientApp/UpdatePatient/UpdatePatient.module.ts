import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';



import {PatientComponent} from '../PatientApp/PatientApp.component';
import { CommonModule } from '@angular/common';
import { UpdatePatientComponent } from './UpdatePatient.component';
import { UpdateRoutes } from 'src/Routing/UpdateRouting';
import { SecurityLogic } from '../Utility/AuthGuard';
import { LoginPatientModel } from '../LoginPatient/LoginPatient.model';
import { MyJwtInterceptor } from '../Utility/Interceptor';



@NgModule({
  declarations: [
    UpdatePatientComponent
  ],
  imports: [
    CommonModule , FormsModule , 
    RouterModule.forChild(UpdateRoutes),
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: MyJwtInterceptor , multi:true}],
  bootstrap: [PatientComponent]
})
export class UpdatePatientModule { }
