import { Injectable } from '@angular/core';
import { Request} from '../app/request.model';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class DonateService {
API_URL = environment.API_URL;
  constructor(private http:HttpClient) { }

  getAllUsers() {
    let url = `${this.API_URL}/v1/users`
    return this.http.get(url);
  }

   placeholder =[];
   donateDetails = new BehaviorSubject([])


  addDetial(request:Request){
    // console.log(request);
    const details = this.getDonateData();
    let index = details.findIndex((detail:any)=>{
      return detail._id === request._id
    })
  }

  setDonateData(data: any) {
    localStorage.setDetail('cart', JSON.stringify(data));
    this.donateDetails.next(this.getDonateData());
  }
  getDonateData() {
    let detailsStr = localStorage.getDetail('donate');
    return detailsStr != null ? JSON.parse(detailsStr) : [];
  }
}
 