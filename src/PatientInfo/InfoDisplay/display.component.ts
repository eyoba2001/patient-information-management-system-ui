import { Component } from '@angular/core';
import { PatientinfoServiceService } from '../patientinfo-service.service';
@Component({
  selector: 'display-component',
  templateUrl: './display.view.html',
  styleUrls: ['./display.style.scss']
})
export class DisplayComponent {
  title = 'PatientInformationApp';
  address="";
  constructor(public fetchserv:PatientinfoServiceService){
   
  }
//    ngOnChange():void{
//     console.log("here"); 
//     console.log(this.fetchserv.response[0].personal_info.address);
 
// }
}
