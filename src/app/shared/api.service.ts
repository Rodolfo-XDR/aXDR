import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http : HttpClient, public configService : ConfigService) {}

  get(url) : Observable<any>
  {
    return this.http.get(this.configService.Configuration.apiURL + url, { withCredentials: true });
  }

  post(url, data) : Observable<any>
  {
    return this.http.post(this.configService.Configuration.apiURL + url, data, { withCredentials: true });
  }
}
