import { Injectable } from '@angular/core';
import { } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private http: HttpClient) { }
  addUser(data: any) {
    let url = `${this.API_URL}/v1/users`
    return this.http.post(url, data
    );
  }
}