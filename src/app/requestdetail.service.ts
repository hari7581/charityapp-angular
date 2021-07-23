import { Injectable } from '@angular/core';
import { Reqdetail } from './reqdetail.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RequestdetailService {


  // private requestdetail: Reqdetail[] = [
  //   new Reqdetail(
  //     1,
  //     'Money donation for child education ',
  //      7896546785,
  //     20000
    

  //   ),
  //   new Reqdetail(
  //     2,
  //     'Money donation for Surgey',
  //     7654378921,
  //     50000,
  
  //   )
  // ]
  API_URL = environment.API_URL;
  constructor(private http:HttpClient) { }
  getAllRequests(){
    let url = '${this.API.URL}/v1/requests'
    return this.http.get(url);
  }
  
  // getReqdetailById(id:number){
  //   return this.requestdetail.find(reqdetail =>
  //     Reqdetail.id === id);
  // }
  
}
