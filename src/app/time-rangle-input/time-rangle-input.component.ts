import { Component, OnInit } from '@angular/core';
import { PackageService } from '../Shared/Services/package.service';

@Component({
  selector: 'app-time-rangle-input',
  templateUrl: './time-rangle-input.component.html',
  styleUrls: ['./time-rangle-input.component.css']
})
export class TimeRangleInputComponent implements OnInit {

  constructor(private packageService:PackageService) {
   
   }

  ngOnInit() {
  }
  fromDate:Date;
  toDate:Date;

  onClick()
  {

      this.packageService.subjectDates.next({start:this.fromDate,end:this.toDate});

  }
  
}
