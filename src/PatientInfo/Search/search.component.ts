import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PatientinfoServiceService} from '../patientinfo-service.service';

@Component({
  selector: 'patient-info-search',
  templateUrl: './search.view.html',
  styleUrls: ['./search.style.scss']
})
export class SearchComponent {
  patient_id: any;
  last_name: any;

  constructor(private fetchService: PatientinfoServiceService) {
  }

  title = 'PatientInformationApp';
  router = new Router();
  numbers: Array<String | Number> = [1, 2, 3, "Hi"];
  myArray = ['apple', 'banana', 'cherry'];

  goToPage() {
    this.router.navigate(['/Display']);
  }

  ngOnInit(): void {
    console.log("ng on init called")
  }

  patientInfoDisplay() {
    this.fetchService.getPatientInformation(this.patient_id, this.last_name);
  }
}
