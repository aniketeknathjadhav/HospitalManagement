import { HomePageComponent } from 'src/MainMasterPage/HomePage.component';
import { SignupPatientComponent } from 'src/Patient/SignupPatient/SignupPatient.component';
import { PatientSecurityLogic, AdminSecurityLogic } from 'src/Utility/AuthGuard';


export const MasterRoutes = [ 
    { path: '', component : HomePageComponent },
    { path: 'Home', component : HomePageComponent },
    { path: 'Signup', component : SignupPatientComponent },
    { path: 'PatientApp',  loadChildren: () => import('../Patient/PatientApp/PatientApp.module').then(m => m.PatientModule),canActivate : [PatientSecurityLogic]},
    { path: 'AdminApp',  loadChildren: () => import('../Admin/AdminApp/AdminApp.module').then(m => m.AdminModule) 
    ,canActivate : [AdminSecurityLogic]},

    {path: 'LoginAdmin', loadChildren: () => import('../Admin/LoginAdmin/LoginAdmin.module').then(m => m.LoginAdminModule) },
    {path: 'LoginPatient', loadChildren: () => import('../Patient/LoginPatient/LoginPatient.module').then(m => m.LoginPatientModule) }

];

