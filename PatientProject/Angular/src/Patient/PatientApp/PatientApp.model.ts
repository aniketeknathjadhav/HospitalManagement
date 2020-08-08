import {NgModel,FormGroup,FormControl,Validators,FormBuilder} 
from '@angular/forms'

export class PatientApp{
    patientId:number=0;
    problems:Array<Problem> = new Array<Problem>();
    //make Formgroup object
 formPatientGroup:FormGroup=null;
 constructor(){
    //make tree structure
    //make builder object 
    var _builder = new FormBuilder 
    //and make tree structure
    this.formPatientGroup = _builder.group({}); 
    //add controller name and validator eg- required
    this.formPatientGroup.addControl("idControl",new FormControl('',Validators.required));
     this.formPatientGroup.addControl("idControl",new 
    FormControl('',Validators.min(1)));
     //add controller for other properties here it is for patientproblem
 
     this.formPatientGroup.addControl("problemControl",new FormControl('',Validators.required));


 }
}

export class Problem
{
    problem:string="";
}



