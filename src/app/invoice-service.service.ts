import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
url="http://localhost:3000/title"
  constructor(private api:HttpClient) { }
  getData(){
    return this.api.get("http://localhost:3000/title");
    console.log(this.url);
  }

  getsingleData(id:any){
    return this.api.get("http://localhost:3000/title/"+id);    
    console.log(this.url);
  }

  save(data:any){
    console.log(data)
    return this.api.post("http://localhost:3000/title",data);    


  }
  send(){

    return this.api.get("http://localhost:3000/title/1");  
    console.log(this.url);

  }
  getCurrentData(code:any,dep:any){
    return this.api.put("http://localhost:3000/title/"+code, dep);
    console.log(this.url,dep)  
  }


deleteData(id:any){
   return this.api.delete("http://localhost:3000/title/"+id);
}
}
  

