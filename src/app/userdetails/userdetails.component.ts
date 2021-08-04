import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  constructor(private service:RegisterService,private userservice:UserdetailsService) { }
  AllUsers:any;
  
  
  ngOnInit(): void {
        // console.log(this.service.getAllUsers());
      this.service.getAllUsers().subscribe((res:any)=>{
       this.AllUsers = res.users;
        console.log(this.AllUsers)
      });
  
    
  }

delete(users:any){
  console.log(users)
   this.userservice.deleteUsers(users._id,users._rev).subscribe((res:any)=>{
     console.log(res)
   })
}


}
