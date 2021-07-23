import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from "../register.service";
import { FormControl, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userform: any
  username: any
  password: any
  registerDetails: any

  constructor(private route:Router,private service:RegisterService) {
    this.userform = new FormGroup({
      "username": new FormControl(),
      "email": new FormControl(),
      "phone": new FormControl(),
      "password": new FormControl()
    })
  }

  Login() {
    console.log(this.userform.value)
    this.service.addUser(this.userform.value).subscribe((res) => {

      this.route.navigateByUrl('login');
    });
  }

    ngOnInit(): void {
    }


  
}
