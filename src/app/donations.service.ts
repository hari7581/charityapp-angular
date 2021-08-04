import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs/internal/symbol/observable';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }
  adddonations(data:any):Observable<any> {
    let url = `${this.API_URL}/v1/donations`
    return this.http.post(url,data);

  }

}
