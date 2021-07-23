import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reqdetail } from './reqdetail.model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonateService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  addDonates(donate: any) {
    console.log(donate)
    let url = `${this.API_URL}/v1/donates`
    return this.http.post(url, donate
    );
  }
  getDonatesById(id: number) {
    let url = `${this.API_URL}/v1/donates/search?donateId=${id}`
    return this.http.get(url);
  }
  updateDonate(id: number) {
    let url = `${this.API_URL}/v1/donates/${id}`
    return this.http.get(url)

  }

  placeholder = [];
  donateDetails = new BehaviorSubject([])

  addDetail(reqdetail: Reqdetail) {
    console.log(reqdetail);
    const details = this.getDonateData();

    let index = details.findIndex((detail: any) => {
      return detail._id === reqdetail.id
    });

    if (index != -1) {
      let existingReqdetail = details[index];
      existingReqdetail.amount++;

      details[index] = existingReqdetail;
    }
    else {
      reqdetail.amount;


      details.push(reqdetail);
    }
    this.setDonateData(details);


  }

  setDonateData(data: any) {
    localStorage.setDetail('cart', JSON.stringify(data));
    this.donateDetails.next(this.getDonateData());
  }
  getDonateData() {
    let detailsStr = localStorage.getdetail('donate');
    return detailsStr != null ? JSON.parse(detailsStr) : [];
  }
}
