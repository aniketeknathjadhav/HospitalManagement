import {NgModule} from '@angular/core'
import { LoginPatientComponent } from './LoginPatient.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../Utility/Material.module';
import { LoginAdminRoute } from 'src/Routing/LoginAdminRouting';
import { LoginPatientRoute } from 'src/Routing/LoginPatientRouting';
import { LoginPatientModel } from './LoginPatient.model';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';









@NgModule({ 
declarations:[
    LoginPatientComponent
],
imports:[
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(LoginPatientRoute),MaterialModule,
    HttpClientModule,MessagesModule,MessageModule
],
providers:[],
bootstrap:[LoginPatientComponent]


})
export class LoginPatientModule{}