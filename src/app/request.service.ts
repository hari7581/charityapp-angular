import { Injectable } from '@angular/core';
import { Request } from '../app/request.model';
import {HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  API_URL = environment.API_URL;

  constructor(private http:HttpClient) { }
  getRequests() {
    let url = `${this.API_URL}/v1/requests`
    return this.http.get(url);
  }
}
