import { HomePageComponent } from 'src/PatientApp/MasterPage/HomePage.component';
import {  PatientSecurityLogic, AdminSecurityLogic } from 'src/PatientApp/Utility/AuthGuard';
import { SignupPatientComponent } from 'src/PatientApp/SignupPatient/SignupPatient.component';


export const MasterRoutes = [ 
    { path: '', component : HomePageComponent },
    { path: 'Home', component : HomePageComponent },
    { path: 'Signup', component : SignupPatientComponent },
    { path: 'PatientApp',  loadChildren: () => import('../PatientApp/PatientApp/PatientApp.module').then(m => m.PatientModule) ,canActivate : [PatientSecurityLogic]},
    { path: 'AdminApp',  loadChildren: () => import('../PatientApp/AdminApp/AdminApp.module').then(m => m.AdminModule) ,canActivate : [AdminSecurityLogic]},

    // { path: 'UpdatePatient', loadChildren: () => import('../PatientApp/UpdatePatient/UpdatePatient.module').then(m => m.UpdatePatientModule),canActivate : [SecurityLogic] },
    {path: 'LoginAdmin', loadChildren: () => import('../PatientApp/LoginAdmin/LoginAdmin.module').then(m => m.LoginAdminModule) },
    {path: 'LoginPatient', loadChildren: () => import('../PatientApp/LoginPatient/LoginPatient.module').then(m => m.LoginPatientModule) }

];

