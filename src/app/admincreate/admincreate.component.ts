import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminaddService } from '../adminadd.service';
 import { RequestsComponent } from 'src/app/requests/requests.component';



@Component({
  selector: 'app-admincreate',
  templateUrl: './admincreate.component.html',
  styleUrls: ['./admincreate.component.scss']
})
export class AdmincreateComponent implements OnInit {

  constructor(private route: Router, private service: AdminaddService) { }



  AllRequests: any;
  ngOnInit(): void {
    //  console.log(this.service.getAllRequests())
    this.service.getAllRequests().subscribe((res) => {
      this.AllRequests = res;
      console.log(this.AllRequests)
    })

  }

  update(requests: any) {
   requests.update = true;
    console.log(requests)
  }

  save(request:any) {
    // console.log(request)
     request.update = false;
    this.service.updateRequestDetails(request._id,request._rev,request).subscribe((res: any) => {
      console.log(res)
    })
  }
  delete(requests:any){
    console.log(requests)
    requests.update = false;
    this.service.deleterequests(requests._id,requests._rev).subscribe((res:any)=>{
      console.log(res)
    })
  }
  
  add() {

    this.route.navigate(['../adminadd'])
  }


}
