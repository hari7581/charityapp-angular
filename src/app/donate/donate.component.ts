import { Component, OnInit } from '@angular/core';
import { Reqdetail } from '../reqdetail.model';
import { validate } from 'json-schema';
import { DonateService} from '../donate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  details: Reqdetail[] = [];
  amount: number = 0;
  constructor(private route:Router,private service:DonateService) { }
 

  ngOnInit(): void {
    this.details = this.service.getDonateData();

   

  }



  onDelete(i: number) {
    this.details.splice(i, 1);
    this.service.setDonateData(this.details);
    

  }


  validateInput(event: any, i: number) {
    const amount = +event.target.value;
    if (amount < 1) {
      event.target.value = this.details[i].amount;
      return;
    }

    this.amountUpdated(amount, i)

  }
  private amountUpdated(amount: number, i: number) {
    this.details[i].amount = amount;
    this.service.setDonateData(this.details)
   
  }


  



  adddonates() {
  
      this.service.addDonates(this.details).subscribe(res => {
        console.log(res)
      })
    }

     } 
  

