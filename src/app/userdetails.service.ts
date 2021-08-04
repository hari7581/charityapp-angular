import { Injectable } from '@angular/core';
import {environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs/internal/symbol/observable';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }
  addUser(data: any) {
    let url = `${this.API_URL}/v1/users`
    return this.http.post(url, data
    );
  }
  getAllUsers(){
    let url = `${this.API_URL}/v1/users`
    return this.http.get(url);
  }
  deleteUsers(_id:any,_rev:any){
    let url = `${this.API_URL}/v1/users/${_id}?rev=${_rev}`
    return this.http.delete(url,_id
    ); 
  }
}