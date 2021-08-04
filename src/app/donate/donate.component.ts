import { Component, OnInit } from '@angular/core';
import { Request } from '../request.model';
import { Router } from '@angular/router';
import { DonateService } from '../donate.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
   details: Request[] =[]
   donate:number = 0;
   donateDetails: any
   id : any
   newUserId: any
   user:any

  constructor(private route:Router,private donateservice:DonateService) { }
 
  ngOnInit(): void {
    this.details = this.donateservice.getDonateData();
    console.log(this.details)
  

  }
 onDelete(i:number){
  this.details.splice(i,1);
  this.donateservice.setDonateData(this.details);
 }
 addDonate(){
   const data: Request[] = this.details
   const newDate = data.map((user)=>{
     const {_id: requestId,...rest } = user;
     return { requestId,...rest}
     var newArrayDataOfObject = Object.values(user)
   });
 }
}
