import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductServiceService } from './product-service.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ProductListingComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [] //ProductServiceService
})
export class ProcductModule { }
