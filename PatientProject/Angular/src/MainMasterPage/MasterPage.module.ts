import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';



import { MasterRoutes } from 'src/Routing/MasterRouting';
import { HomePageComponent } from './HomePage.component';
import { MasterPageComponent } from './MasterPage.component';
import { AdminSecurityLogic, PatientSecurityLogic } from '../Utility/AuthGuard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientInterceptor, AdminInterceptor } from '../Utility/Interceptor';
import { PrimeNgModule } from 'src/Utility/PrimeNg.module';
import { SignupPatientComponent } from 'src/Patient/SignupPatient/SignupPatient.component';
import { LoginPatientModel } from 'src/Patient/LoginPatient/LoginPatient.model';
import { LoginAdminModel } from 'src/Admin/LoginAdmin/LoginAdmin.model';






@NgModule({
  declarations: [
     HomePageComponent, MasterPageComponent,SignupPatientComponent
  ],
  imports: [
    BrowserModule , FormsModule , BrowserAnimationsModule, 
    RouterModule.forRoot(MasterRoutes),HttpClientModule,
    ReactiveFormsModule, PrimeNgModule],
  providers: [ PatientSecurityLogic, AdminSecurityLogic, LoginPatientModel, LoginAdminModel,
    {provide:HTTP_INTERCEPTORS, useClass: PatientInterceptor , multi:true},
    {provide:HTTP_INTERCEPTORS, useClass: AdminInterceptor , multi:true}

],
   bootstrap: [MasterPageComponent]
})
export class MasterPageModule { }
