import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appConstants } from 'src/app/constants';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  appConstants = appConstants;
  products: any[] = [];

  constructor(private router: Router, private productServiceService: ProductServiceService ) { }

  ngOnInit(): void {
    console.log(this.productServiceService.getProducts());
    this.products = this.productServiceService.getProducts();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
