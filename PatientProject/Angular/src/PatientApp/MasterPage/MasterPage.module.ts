import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import {HttpClientModule} from '@angular/common/http';


import { MasterRoutes } from 'src/Routing/MasterRouting';
import { HomePageComponent } from './HomePage.component';
import { MasterPageComponent } from './MasterPage.component';

@NgModule({
  declarations: [
     HomePageComponent, MasterPageComponent
  ],
  imports: [
    BrowserModule , FormsModule , 
    RouterModule.forRoot(MasterRoutes),HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MasterPageModule { }
