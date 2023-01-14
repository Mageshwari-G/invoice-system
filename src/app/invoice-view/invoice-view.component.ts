import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.css']
})
export class InvoiceViewComponent implements OnInit {
  title:any=[{
      
    InvoiceNo:"",
    custname:"",
    pendingamt:"",
    Invoiceamt:"",
    status:""
     }];
     code:any = '';
  constructor(public http: InvoiceServiceService,public ar:ActivatedRoute,private as:ActivatedRoute) {
    this.ar.paramMap.subscribe((res:any)=>{
      console.log(res.params); 
      this.code = res.params.code; 

      this.http.getsingleData(res.params.code).subscribe((res)=>{
        console.log(res);
        this.title = res;
        

      })
          
    }
    )}

  ngOnInit(): void {
    let data:any=this.ar.snapshot.queryParams;
    console.log(data.title)  
  }
  submit(){
    let item:any={InvoiceNo:this.title.InvoiceNo,custname:this.title.custname,pendingamt:this.title.pendingamt,invoiceamt:this.title.Invoiceamt,status:this.title.status};

  
    this.http.getCurrentData(this.code,item).subscribe((res:any)=>{  
      console.log(res);
      this.title=res;


      


    });
    

     

   
   }
  
  
    
  
  }
   
  
  


