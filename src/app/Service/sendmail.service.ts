import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  sendmail(object: any) {
    let options = {
      // headers: headers
    };
    let fullUrl = this.baseUrl+'/api/rqstforcontact'
    return this.http.post(fullUrl,object,options);
  }
}
