import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';




import { SearchRoutes } from 'src/Routing/SearchRouting';
import { CommonModule } from '@angular/common';
import { SearchPatientComponent } from './SearchPatient.component';
import { SecurityLogic } from '../Utility/AuthGuard';
import { LoginPatientModel } from '../LoginPatient/LoginPatient.model';
import { MyJwtInterceptor } from '../Utility/Interceptor';

@NgModule({
  declarations: [
   SearchPatientComponent
  ],
  imports: [
    CommonModule , FormsModule , 
    RouterModule.forChild(SearchRoutes),
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: MyJwtInterceptor , multi:true}],
  bootstrap: [SearchPatientComponent]
})
export class SearchPatientModule { }
