import { NgModule }       from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './list/products-list.component';
import { ProductsDetailComponent } from './details/products-detail.component';
import { ProductsService } from './products.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsComponent,
    ProductsDetailComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
     ProductsRoutingModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }