import { Component, OnInit } from '@angular/core';
import { Request } from '../request.model';
import { RequestService } from '../request.service';
import { Router, Data } from '@angular/router';
import { DonateService } from '../donate.service';
import { DonationsService } from '../donations.service';
import { stringify, newArray } from '@angular/compiler/src/util';
import { UserdetailsService } from 'src/app/userdetails.service';
import { __rest } from 'tslib';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  requests: Request[] = [];
  constructor(private donationservice: DonationsService, private service: RequestService, private donateservice: DonateService, private route: Router) { }
  request: '';
  searchRequests: Request[] = [];
  data: any
  newArrayDataOfObject:any
  ngOnInit(): void {

    this.service.getRequests().subscribe((res: any) => {
      this.requests = res;
      console.log(JSON.stringify(this.requests));
      console.log(this.requests)
      this.searchRequests = this.requests;
      console.log(this.searchRequests)
    });

  }

  donate(request: Request) {
    const data: Request[] = this.requests
    const newData = data.map((user) => {
      const { _id: requestId, ...rest } = user;
      return { requestId, ...rest }
      console.log(newData)
      
    });
    var newArrayDataOfObject = Object.values(newData)
    console.log(newArrayDataOfObject)
    const newvalues = Object.assign({},newArrayDataOfObject)
    
    console.log(request)
    console.log(this.requests)
    console.log(newvalues)
       this.donationservice.adddonations(newvalues).subscribe((res) => {
      console.log(res)
      this.route.navigateByUrl('donations')
    });


    this.donateservice.addDetial(request)

  }


  Search() {
    alert(this.request);
    this.searchRequests = this.requests.filter((res: any) => res.request.toLocaleLowerCase().includes(this.request.toLocaleLowerCase()));

  }
}
