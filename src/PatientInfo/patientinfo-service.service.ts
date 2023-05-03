import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PatientinfoServiceService {
   response:any;
   name="";
   address="";
   disease="";
   stage="";

  constructor(private http:HttpClient) { }
  getPatientInformation(patient_id:any, last_name:any){
    this.name= "";
    this.address= "";
    this.disease= "";
    this.stage= "";
   const params= new HttpParams().set('patient_id', patient_id).set('personal_info.last_name', last_name);
   this.http.get('http://localhost:3000/patient',{params}).subscribe((data:any)=>{
    this.response=data[0];
    this.name= this.response.personal_info.first_name + " " +this.response.personal_info.last_name;
    this.address= this.response.personal_info.address;
    this.disease= this.response.health_info.disease;
    this.stage= this.response.health_info.stage;
   });

  }
}
