import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { InvoiceManageComponent } from './invoice-manage/invoice-manage.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { FormsModule } from '@angular/forms';


const routes:Routes=[{
  path:'home',
  component:AppComponent
},
  {
  path:'create',
  component:InvoiceCreateComponent,
  }
,
{
  path:'manage',
  component:InvoiceManageComponent,

},
{
path:'view/:code',
component:InvoiceViewComponent,
}
]
@NgModule({
  declarations: [
 AppComponent,
    InvoiceCreateComponent,
    InvoiceManageComponent,
    InvoiceViewComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    


  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
