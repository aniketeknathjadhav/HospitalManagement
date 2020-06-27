import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule} from '@angular/common/http';


import {PatientHomePageComponent} from './HomePage/PatientAppHomePage.component';
import {PatientComponent} from './PatientApp/PatientApp.component';
import {PatientMasterPageComponent} from './MasterPage/PatientApMasterPage.component';
import {PatientRoutes} from '../Routing/PatientRouting';
import { SearchPatientComponent } from './SearchPatientPage/SearchPatient.component';

@NgModule({
  declarations: [
    PatientComponent , PatientHomePageComponent, PatientMasterPageComponent,SearchPatientComponent
  ],
  imports: [
    BrowserModule , FormsModule , 
    RouterModule.forRoot(PatientRoutes),HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [PatientMasterPageComponent]
})
export class PatientModule { }
