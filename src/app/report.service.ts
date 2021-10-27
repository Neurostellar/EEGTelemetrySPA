import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { } 

  addScanReport(report : any) {
    let headers = new HttpHeaders();  
        headers.append('Content-Type', 'application/json');  
        const httpOptions = {  
            headers: headers  
        };  
    return this.http.post<any>( APIUrl + 'admin/addScanReport', report ,httpOptions);
  }

  getReportList() : Observable<any>{  
    return this.http.get<any>( APIUrl + 'admin/getReportList');
  }

  getReportData(reportID) {  
    let headers = new HttpHeaders();  
    headers.append('Content-Type', 'application/json');  
    const httpOptions = {  
        headers: headers  
    };  
    return this.http.get<any>( APIUrl + 'admin/getReportData', { params: new HttpParams().set('reportID', reportID)});
  }

  submitReport(report : any) {
    let headers = new HttpHeaders();  
        headers.append('Content-Type', 'application/json');  
        const httpOptions = {  
            headers: headers  
        };  
    return this.http.post<any>( APIUrl + 'admin/submitReport', report ,httpOptions);
  }

  clearNotification(ids : any[]) {
    let headers = new HttpHeaders();  
        headers.append('Content-Type', 'application/json');  
        const httpOptions = {  
            headers: headers  
        };  
    return this.http.post<any>( APIUrl + 'admin/notificationAlertSeen', ids ,httpOptions);
  }

  copyFileToTemp(fileName : string) : Observable<any> {
    let headers = new HttpHeaders();  
    headers.append('Content-Type', 'application/json');  
    const httpOptions = {  
        headers: headers  
    };  
    return this.http.get<any>( APIUrl + 'admin/copyFileToTemp', { params: new HttpParams().set('fileName', fileName)});
  }
}
