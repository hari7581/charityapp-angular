import { Component, OnInit } from '@angular/core';
import {Request} from '../request.model';
import { RequestService} from '../request.service';
import {Router } from '@angular/router';
import { DonateService } from '../donate.service';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
 requests:Request[] = [];
  constructor(private service:RequestService,private donateservice:DonateService,private route:Router) { }
   request:'';
   searchRequests:Request[] = [];
  ngOnInit(): void {
  
    this.service.getRequests().subscribe((res:any)=>{
      this.requests = res;
      console.log(JSON.stringify((this.requests)));
      this.searchRequests = this.requests;
    })
  }

 donate(request:Request){
   console.log(request)
   this.donateservice.addDetial(request)
 }

  Search(){
    alert(this.request);
    this.searchRequests = this.requests.filter((res: any) => res.request.toLocaleLowerCase().includes(this.request.toLocaleLowerCase()));

  }
}
