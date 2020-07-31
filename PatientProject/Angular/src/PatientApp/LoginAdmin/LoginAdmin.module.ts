import {NgModule} from '@angular/core'
import { LoginAdminComponent } from './LoginAdmin.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../Utility/Material.module';
import { LoginAdminRoute } from 'src/Routing/LoginAdminRouting';







@NgModule({
declarations:[
    LoginAdminComponent
],
imports:[
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(LoginAdminRoute),MaterialModule,HttpClientModule],
providers:[],
bootstrap:[LoginAdminComponent]


})
export class LoginAdminModule{}