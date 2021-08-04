import { Component, OnInit } from '@angular/core';
import { DonationsService } from '../donations.service';
import {Request} from '../request.model';


@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {

  constructor(private donateservice:DonationsService) { }
  
  AllDonations:any;
  request:Request[]= []
 newvalues:any
  ngOnInit(): void {
  console.log(this.donateservice.adddonations(this.newvalues))
  this.donateservice.adddonations(this.newvalues).subscribe((res)=>{
    console.log(res)
    this.AllDonations = res;
    console.log(this.AllDonations)

  })
  
  }

}
