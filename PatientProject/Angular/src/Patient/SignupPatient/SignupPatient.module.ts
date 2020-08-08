import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { SignupPatientRoute } from 'src/Routing/SignupPatientRouting';
import { SignupPatientComponent } from './SignupPatient.component';
import { PrimeNgModule } from 'src/Utility/PrimeNg.module';

@NgModule({
  declarations: [
    SignupPatientComponent
  ],
  imports: [
    BrowserModule , FormsModule,
    RouterModule.forRoot(SignupPatientRoute),
    ReactiveFormsModule,PrimeNgModule,HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [SignupPatientComponent]
})
export class SignupPatientModule { }
