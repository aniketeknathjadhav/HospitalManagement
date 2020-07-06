import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { MasterRoutes } from 'src/Routing/MasterRouting';
import { HomePageComponent } from './HomePage.component';
import { MasterPageComponent } from './MasterPage.component';
import { SecurityLogic } from '../Utility/AuthGuard';
import { LoginPatientModel } from '../LoginPatient/LoginPatient.model';
import { MyJwtInterceptor } from '../Utility/Interceptor';

@NgModule({
  declarations: [
     HomePageComponent, MasterPageComponent
  ],
  imports: [
    BrowserModule , FormsModule , 
    RouterModule.forRoot(MasterRoutes),HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SecurityLogic,LoginPatientModel,
    {provide:HTTP_INTERCEPTORS, useClass: MyJwtInterceptor , multi:true}],
  

  bootstrap: [MasterPageComponent]
})
export class MasterPageModule { }
