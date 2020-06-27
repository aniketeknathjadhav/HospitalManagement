import { HomePageComponent } from 'src/PatientApp/MasterPage/HomePage.component';


export const MasterRoutes = [ 
    { path: '', component : HomePageComponent },
    { path: 'Home', component : HomePageComponent },
    { path: 'PatientApp',  loadChildren: () => import('../PatientApp/PatientApp/PatientApp.module').then(m => m.PatientModule) },
    { path: 'SearchPatient', loadChildren: () => import('../PatientApp/SearchPatientPage/SearchPatient.module').then(m => m.SearchPatientModule) }
];

