import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { MaterialModule } from '../Utility/Material.module';
import { SignupPatientRoute } from 'src/Routing/SignupPatientRouting';
import { SignupPatientComponent } from './SignupPatient.component';

@NgModule({
  declarations: [
    SignupPatientComponent
  ],
  imports: [
    BrowserModule , FormsModule,
    RouterModule.forRoot(SignupPatientRoute),
    ReactiveFormsModule,MaterialModule,HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [SignupPatientComponent]
})
export class SignupPatientModule { }
