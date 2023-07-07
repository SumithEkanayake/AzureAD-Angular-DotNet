import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Profile } from './profile.model';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
const GRAPH_ENDPOINT_PIC = 'https://graph.microsoft.com/v1.0/me/photo/$value';
const REPORT_API = 'https://localhost:44321/api/';

@Injectable({
  providedIn: 'root'
})
export class AzureAdDemoService {
  isUserLoggedIn:Subject<boolean> = new Subject<boolean>();
  constructor(private httpClient: HttpClient) { }

  getUserProfile()
  {
    return this.httpClient.get<Profile>(GRAPH_ENDPOINT);
  }

  getProfilePic()
  {
    return this.httpClient.get(GRAPH_ENDPOINT_PIC,{responseType:'blob'});
  }

  getReport()
  {
    return this.httpClient.get(REPORT_API+'Report/GetReport',{responseType:'blob'});
  }

  getReportStatus()
  {
    return this.httpClient.get<any>(REPORT_API+'Report/GetReportStatus');
  }
}
