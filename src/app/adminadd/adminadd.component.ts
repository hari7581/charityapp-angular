import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminaddService } from '../adminadd.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.scss']
})
export class AdminaddComponent implements OnInit {
   request:any;

  constructor(private route:Router,private service:AdminaddService) {
    this.request = new FormGroup({
      "requests": new FormControl(),
      "contactno": new FormControl(),
      "amount": new FormControl(),
      "status": new FormControl()
    })

   }

  ngOnInit(): void {
  }

  submit(){
    
    // console.log(this.request.value)
    //  alert(JSON.stringify(this.request.value));
    //  localStorage.setItem("trust",JSON .stringify(this.request.value));
     
   
   this.service.addrequest(this.request.value).subscribe((res)=>{
    console.log(res)
    this.route.navigate(['../admincreate'])

   });
  }
  
}
