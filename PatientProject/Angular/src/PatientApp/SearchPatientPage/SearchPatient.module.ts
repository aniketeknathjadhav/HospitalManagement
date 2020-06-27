import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule} from '@angular/common/http';




import { SearchRoutes } from 'src/Routing/SearchRouting';
import { CommonModule } from '@angular/common';
import { SearchPatientComponent } from './SearchPatient.component';

@NgModule({
  declarations: [
   SearchPatientComponent
  ],
  imports: [
    CommonModule , FormsModule , 
    RouterModule.forChild(SearchRoutes),HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [SearchPatientComponent]
})
export class SearchPatientModule { }
