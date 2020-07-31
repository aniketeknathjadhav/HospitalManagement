import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';



import { MasterRoutes } from 'src/Routing/MasterRouting';
import { HomePageComponent } from './HomePage.component';
import { MasterPageComponent } from './MasterPage.component';
import { AdminSecurityLogic, PatientSecurityLogic } from '../Utility/AuthGuard';
import { LoginAdminComponent } from '../LoginAdmin/LoginAdmin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../Utility/Material.module';
import { SignupPatientComponent } from '../SignupPatient/SignupPatient.component';
import { LoginPatientComponent } from '../LoginPatient/LoginPatient.component';
import { PatientInterceptor, AdminInterceptor } from '../Utility/Interceptor';
import { LoginPatientModel } from '../LoginPatient/LoginPatient.model';
import { LoginAdminModel } from '../LoginAdmin/LoginAdmin.model';






@NgModule({
  declarations: [
     HomePageComponent, MasterPageComponent, SignupPatientComponent
  ],
  imports: [
    BrowserModule , FormsModule , BrowserAnimationsModule, 
    RouterModule.forRoot(MasterRoutes),HttpClientModule,
    ReactiveFormsModule, MaterialModule ],
  providers: [ PatientSecurityLogic,AdminSecurityLogic,LoginPatientModel,LoginAdminModel,
    {provide:HTTP_INTERCEPTORS, useClass: PatientInterceptor , multi:true},
    {provide:HTTP_INTERCEPTORS, useClass: AdminInterceptor , multi:true}

],
   bootstrap: [MasterPageComponent]
})
export class MasterPageModule { }
