import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';



import {PatientComponent} from '../PatientApp/PatientApp.component';
import { AdminRoutes } from 'src/Routing/AdminRouting';
import { CommonModule } from '@angular/common';
import { AdminSecurityLogic } from '../Utility/AuthGuard';
import { AdminInterceptor } from '../Utility/Interceptor';
import { MaterialModule } from '../Utility/Material.module';
import { AdminComponent } from './AdminApp.component';
import { LoginAdminModel } from '../LoginAdmin/LoginAdmin.model';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule , FormsModule , 
    RouterModule.forChild(AdminRoutes),
    ReactiveFormsModule,MaterialModule,HttpClientModule
  ],
  providers: [ AdminSecurityLogic,
    {provide:HTTP_INTERCEPTORS, useClass: AdminInterceptor , multi:true}
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
