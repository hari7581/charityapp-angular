import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  constructor(private service:RegisterService) { }
  AllUsers:any;
  ngOnInit(): void {
    // console.log(this.service.addUser(data));
    // this.service.addUser(data).subscribe((res:any)=>{

    // });
  
    
  }

}
