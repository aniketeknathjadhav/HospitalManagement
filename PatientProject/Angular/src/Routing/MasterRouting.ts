import { HomePageComponent } from 'src/PatientApp/MasterPage/HomePage.component';
import { SecurityLogic } from 'src/PatientApp/Utility/AuthGuard';


export const MasterRoutes = [ 
    { path: '', component : HomePageComponent },
    { path: 'Home', component : HomePageComponent },
    { path: 'PatientApp',  loadChildren: () => import('../PatientApp/PatientApp/PatientApp.module').then(m => m.PatientModule) ,canActivate : [SecurityLogic]},
    { path: 'SearchPatient', loadChildren: () => import('../PatientApp/SearchPatientPage/SearchPatient.module').then(m => m.SearchPatientModule),canActivate : [SecurityLogic] },
    { path: 'UpdatePatient', loadChildren: () => import('../PatientApp/UpdatePatient/UpdatePatient.module').then(m => m.UpdatePatientModule),canActivate : [SecurityLogic] },
    {path: 'LoginPatient', loadChildren: () => import('../PatientApp/LoginPatient/LoginPatient.module').then(m => m.LoginPatientModule) }
];

