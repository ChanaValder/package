import { Component } from '@angular/core';
import { PackageService } from '../Shared/Services/package.service';
import { Observable, of, from, Subject } from "rxjs";

@Component({
  selector: 'app-package-input',
  templateUrl: './package-input.component.html',
  styleUrls: ['./package-input.component.css']
})
export class PackageInputComponent  {

  constructor( private packageService:PackageService) { }

  filterByPackageName(event)
  {
    this.packageService.getAllFilterPackages(event).subscribe((res)=>{
      // console.log(res);
      this.packageService.subject.next(res)});
  }


}
