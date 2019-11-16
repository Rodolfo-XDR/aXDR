import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config : any;

  constructor(private http : HttpClient) {
  }

  loadConfiguration()
  {
    return this.http.get('user.config.json')
    .toPromise()
    .then(res => {
      this.config = res;
      return this.config;
    })
    .catch();
  }

  get Configuration() {
    return this.config;
  }
}
