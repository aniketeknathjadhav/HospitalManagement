import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';



import { AdminRoutes } from 'src/Routing/AdminRouting';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './AdminApp.component';
import { PrimeNgModule } from 'src/Utility/PrimeNg.module';
import { AdminSecurityLogic } from 'src/Utility/AuthGuard';
import { AdminInterceptor } from 'src/Utility/Interceptor';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule , FormsModule , 
    RouterModule.forChild(AdminRoutes),PrimeNgModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [ AdminSecurityLogic,
    {provide:HTTP_INTERCEPTORS, useClass: AdminInterceptor , multi:true}
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
