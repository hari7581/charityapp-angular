import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RegisterService } from "../register.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private service: RegisterService) { }
  username: any;
  password: any;
  logindetails: any;

  ngOnInit(): void {
  }

  submit() {

    this.service.login(this.username, this.password).subscribe((res) => {
      console.log(res);
      let user: any = res;
      this.logindetails = res;
      localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));



      console.log(user)
      if (user.role === "admin") {
        this.route.navigateByUrl('home')
      } else {
        this.route.navigateByUrl('home')
      }




    }, err => {
      console.log(err);
      alert("Invalid Login Credentials");
    })


  }
}

