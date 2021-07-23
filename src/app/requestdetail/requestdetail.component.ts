import { Component, OnInit } from '@angular/core';
import { Reqdetail } from '../reqdetail.model';
import { RequestdetailService } from '../requestdetail.service';
import { DonateService } from '../donate.service';
@Component({
  selector: 'app-requestdetail',
  templateUrl: './requestdetail.component.html',
  styleUrls: ['./requestdetail.component.scss']
})
export class RequestdetailComponent implements OnInit {
  requestdetail:Reqdetail[] = [];
  constructor(private requestdetailService:RequestdetailService,private donateService:DonateService) { }
  
  name = "";

  searchRequestdetail: Reqdetail[] = [];

  ngOnInit(): void {
     this.requestdetailService.getAllRequests().subscribe((res:any)=>{
       this.requestdetail = res;
       console.log(JSON.stringify(this.requestdetail));
    this.searchRequestdetail= this.requestdetail;

     })
  
    
  }
  addTodonate(reqdetail:Reqdetail){
    this.donateService.addDetail(reqdetail)
 
  }
  Search(){
    alert(this.name);
    this.searchRequestdetail = this.requestdetail.filter((res:any)=> res.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()));
    
  } 
  
}
