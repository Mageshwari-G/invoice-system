import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';



@Component({
  selector: 'app-invoice-manage',
  templateUrl: './invoice-manage.component.html',
  styleUrls: ['./invoice-manage.component.css']
})
export class InvoiceManageComponent implements OnInit {

list:any=[];
//title:any="";
//code:any='';
  constructor(public api:InvoiceServiceService) {
    this.api.getData().subscribe((res:any)=>{
      console.log(res);
      this.list=res;
      // this.code = res.params.code; 

    })
   }

  ngOnInit(): void {
  }
delete(item:any){

this.api.deleteData(item.id).subscribe((res:any)=>{
  console.log(res);

})
this.api.getData().subscribe((res:any)=>{
  console.log(res);
  this.list=res;
 
});
}}
