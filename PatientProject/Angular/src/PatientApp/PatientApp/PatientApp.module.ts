import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule} from '@angular/common/http';



import {PatientComponent} from '../PatientApp/PatientApp.component';
import { PatientRoutes } from 'src/Routing/PatientRouting';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule , FormsModule , 
    RouterModule.forChild(PatientRoutes),HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [PatientComponent]
})
export class PatientModule { }
