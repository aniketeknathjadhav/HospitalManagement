import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';




import { AdminModel} from './AdminApp.model'
import { Problem } from 'src/Patient/PatientApp/PatientApp.model';



@Component({

  templateUrl: './AdminApp.view.html',

})
export class AdminComponent {
  title = "HospitalManagement";
  patientObj: AdminModel = null;
  problemObj: Problem = null;
  pat1: number = 0;
  patientObjs: Array<AdminModel> = new Array<AdminModel>();
  doctors:any[]=[];
  selectedDoctor:string;
  UpdateScreen: boolean = false;
  OpenDoctorDropdown: Boolean = false;
  DoctorAssigned: boolean = false;
  constructor(public Httpobj: HttpClient) {
    this.patientObj = new AdminModel();
    this.problemObj = new Problem();
    this.PatientGet();

  }

  AddProblem() {
    this.patientObj.problems.push(this.problemObj);
    this.problemObj = new Problem();
  }

  DeleteProblem(value) {
    // remove particular array usig slice ad fididex
    this.patientObj.problems.splice(this.patientObj.problems.findIndex(v => v.problem === value), 1);
  }

  //******************** GEt Doctors*********************** */
  DocGet() {

    this.Httpobj.get("https://localhost:44325/api/AdminApi/Get/5?=")
      .subscribe((res: any) => {
        this.doctors = res;
      },
        err => {
          alert(err.error);
        });
  }


  DoctorDropdown(id:number) {
    this.patientObj.patientId=id;
    this.DocGet();
    this.OpenDoctorDropdown = true;
  }

  CloseDropdown() {
    this.OpenDoctorDropdown = false;
    this.DoctorUpdate();
  }

  DoctorUpdate() {
    // extract only values from Json
    var obj = JSON.parse(this.selectedDoctor);
    var currentDoctor = Object.values(obj);
    //create DTO
    var pat: any = {};
    pat.patientId=this.patientObj.patientId;
   pat.doctor = currentDoctor;
    this.Httpobj.put("https://localhost:44325/api/AdminApi/putDoc"
      ,pat)
      .subscribe(res => this.SuccessUpdateDoc(res),
        res => this.ErrorUpdateDoc(res));

    // alert("this is patient" + " " + this.patientObj.patientName 
    // + " " + "having" + " " + this.patientObj.patientProblem);
  }

  SuccessUpdateDoc(res) {
    alert("DoctorAssigned")
    this.DoctorAssigned = true;
    this.PatientGet();

  }

  ErrorUpdateDoc(res) {

  }


  //******************** Get Patients*********************** */
  PatientGet() {
    this.Httpobj.get("https://localhost:44325/api/AdminApi/Get?=")
      .subscribe(res => this.SuccessPat(res),
        res => this.ErrorPat(res));
  }


  SuccessPat(res) {
    this.patientObjs = res;
      
  }
  ErrorPat(res) {

  }



  // *********************Delete Patient************************************* 


  Delete(pat: number) {

    this.pat1 = pat;
    this.Httpobj.delete("https://localhost:44325/api/AdminApi/Delete?id="
      + this.pat1)
      .subscribe(res => this.SuccessDel(res),
        res => this.ErrorDel(res));

    // alert("this is patient" + " " + this.patientObj.patientName 
    // + " " + "having" + " " + this.patientObj.patientProblem);
  }

  SuccessDel(res) {
    if (res == 1) {
      this.PatientGet();
    }

  }

  ErrorDel(res) {

  }

  //  @Output() 
  //  eventEmitter: EventEmitter<Object> = new EventEmitter<Object>();
  // Update(){
  //   var pat: any={};
  //   pat.id=this.patientObj.id;
  //   pat.patientName=this.patientObj.patientName;
  //   pat.patientProblem=this.patientObj.patientProblem;
  //   this.eventEmitter.emit(pat);

  //**********************Update PAtient********************** */

  Update(pat: any) {
    this.problemObj.problem = "";
    this.patientObj.patientId = pat.patientId
    this.patientObj.firstName = pat.firstName
    this.patientObj.lastName = pat.lastName;
    this.patientObj.gender = pat.gender;
    this.patientObj.email = pat.email;
    this.patientObj.contact = pat.contact;
    this.patientObj.problems = pat.problems;
    this.UpdateScreen = true;
  }

  Put() {
    var pat: any = {};
    pat.patientId = this.patientObj.patientId;
    pat.firstName = this.patientObj.firstName;
    pat.lastName = this.patientObj.lastName;
    pat.gender = this.patientObj.gender;
    pat.email = this.patientObj.email;
    pat.contact = this.patientObj.contact;
    pat.problems = [];
    pat.problems = this.patientObj.problems;

    this.Httpobj.put("https://localhost:44325/api/AdminApi/Put"
      , pat)
      .subscribe(res => this.Success(res),
        res => this.Error(res));

    // alert("this is patient" + " " + this.patientObj.patientName 
    // + " " + "having" + " " + this.patientObj.patientProblem);
  }

  Success(res) {
    alert("updated")
    this.UpdateScreen = false;
    this.PatientGet();

  }

  Error(res) {

  }






}

