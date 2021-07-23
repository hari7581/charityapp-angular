import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  constructor(private service:RegisterService) { }
  userform:any
  ngOnInit(): void {
    console.log(this.userform.value)
    this.service.addUser(this.userform.value).subscribe((res)=>{
     
    });
  }

}
