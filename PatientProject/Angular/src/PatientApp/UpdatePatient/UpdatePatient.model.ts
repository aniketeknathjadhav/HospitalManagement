// import {NgModel,FormGroup,FormControl,Validators,FormBuilder} 
// from '@angular/forms'
// import { Problem } from '../PatientApp/PatientApp.model';

// export class UpdatePatientModel{
//     id:number=0;
//     firstName:string="";
//     lastName:string="";
//     gender:string="";
//     email:string="";
//     contact:number=null;
//     problems:Array<Problem> = new Array<Problem>();

//     //make Formgroup object
//  formPatientGroup:FormGroup=null;
//  constructor(){
//     //make tree structure
//     //make builder object 
//     var _builder = new FormBuilder 
//     //and make tree structure
//     this.formPatientGroup = _builder.group({}); 
//     //add controller name and validator eg- required
    
//      //add controller for other properties here it is for patientproblem
//      this.formPatientGroup.addControl("firstNameControl",new FormControl('',Validators.required));
//      this.formPatientGroup.addControl("lastNameControl",new FormControl('',Validators.required));
//      this.formPatientGroup.addControl("genderControl",new FormControl('',Validators.required));
//      this.formPatientGroup.addControl("emailControl",new FormControl('',Validators.required));
//      this.formPatientGroup.addControl("contactControl",new FormControl('',Validators.required));

//      this.formPatientGroup.addControl("userNameControl",new FormControl('',Validators.required));
//      this.formPatientGroup.addControl("passwordControl",new FormControl('',Validators.required));


//  }
// }





