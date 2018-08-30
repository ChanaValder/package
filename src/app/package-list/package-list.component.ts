import { Component, OnInit } from '@angular/core';
import { PackageService } from '../Shared/Services/package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {


  packageList: any;
  ngOnInit() {

  }
  fromDate: Date;
  toDate: Date;
  list:any[]=[];
  constructor(private packageService: PackageService) {
 
    this.packageService.subject.subscribe(
      {
        next: (v:any) => {this.list=[];
             v.forEach(element => {
          this.list.push({name:element.package.name})
         
        })
      }
        }  );

    this.packageService.subjectDates.subscribe(
      {
        next: (v:{start:any,end:any}) => this.list.forEach(el=>{
          this.packageService.filterDates(el["name"],v.start,v.end).subscribe(p=>{
              el.downloads=p.downloads
              ;
           })
        })
      }
    );


  }
 


  
}
