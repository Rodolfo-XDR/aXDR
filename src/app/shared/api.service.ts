import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  readonly URL_API = 'http://localhost:3000/api'

  constructor(private http : HttpClient) { }

  get(url) : Observable<any>
  {
    return this.http.get(this.URL_API + url, { withCredentials: true });
  }

  post(url, data) : Observable<any>
  {
    return this.http.post(this.URL_API + url, data, { withCredentials: true });
  }
}
