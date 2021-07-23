import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  email:any;
  password:any;
  alert:boolean= false;

  constructor(private route:Router,private service:AdminService) { }

  ngOnInit(): void {
  }
  login(){
    if(this.email && this.password)
    {
      this.service.admindetails.email==this.email;
      this.service.admindetails.password==this.password;
      this.route.navigate(['./adminhome'])
    }else{
      alert("Please enter valid details")
    }
  } 
  }  


