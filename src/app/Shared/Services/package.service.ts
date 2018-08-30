import { Injectable } from '@angular/core';
import { Observable, of, from, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }
  subject = new Subject();
  subjectDates = new Subject();
  

  getAllFilterPackages(event): Observable<any> {
  
   return this.http.get( `https://api.npms.io/v2/search/suggestions?q=${event}&size=40`);

  }
   filterDates(packageName, fromDate,toDate): Observable<any>
  {
       return   this.http.get(`https://api.npmjs.org/downloads/point/${fromDate}:${toDate}/${packageName}`);
  }

}
