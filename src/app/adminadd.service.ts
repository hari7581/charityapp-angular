import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { error } from '@angular/compiler/src/util';
import { RequestsComponent } from 'src/app/requests/requests.component';


@Injectable({
  providedIn: 'root'
})
export class AdminaddService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }
  getAllRequests(): Observable<any> {
    let url = `${this.API_URL}/v1/requests`
    return this.http.get(url);

  }
  addrequest(data: any) {
    let url = `${this.API_URL}/v1/requests`
    return this.http.post(url, data
    );
  }
  updateRequestDetails(id: any, rev: any,request:any) {
    let url = `${this.API_URL}/v1/requests/${id}?rev=${rev}`
    return this.http.put(url,request
    );
  }
  deleterequests(_id: any, _rev: any) {
    let url = `${this.API_URL}/v1/requests/${_id}?rev=${_rev}`
    return this.http.delete(url, _id
    );
  }
}
