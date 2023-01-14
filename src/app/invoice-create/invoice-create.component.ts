import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {
  title:any=[{
      
  InvoiceNo:"",
  custname:"",
  pendingamt:"",
  Invoiceamt:"",
  status:""
   }];
   table:any=[];

  

constructor(public http: InvoiceServiceService){

  
 
  }



ngOnInit():  void {
 
 
  }





submit(){
  let item:any={InvoiceNo:this.title.InvoiceNo,custname:this.title.custname,pendingamt:this.title.pendingamt,invoiceamt:this.title.Invoiceamt,status:this.title.status};
  
  this.http.save(item).subscribe((res:any)=>{
    console.log(res);
  console.log(this.title)                                                                                         
  });

 
 }


  

}
 





