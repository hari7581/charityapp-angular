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
   userDetails: any
   id : any
   donatedetails: any

  constructor(private route:Router,private donateservice:DonateService) { }
 
  ngOnInit(): void {
    this.details = this.donateservice.getDonateData();
    console.log(this.details)
  

  }
 onDelete(i:number){

 }
}
