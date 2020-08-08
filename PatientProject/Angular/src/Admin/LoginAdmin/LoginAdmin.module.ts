import {NgModule} from '@angular/core'
import { LoginAdminComponent } from './LoginAdmin.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginAdminRoute } from 'src/Routing/LoginAdminRouting';
import { PrimeNgModule } from 'src/Utility/PrimeNg.module';







@NgModule({
declarations:[
    LoginAdminComponent
],
imports:[
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(LoginAdminRoute),PrimeNgModule,HttpClientModule],
providers:[],
bootstrap:[LoginAdminComponent]


})
export class LoginAdminModule{}