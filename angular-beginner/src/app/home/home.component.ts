import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../procduct/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,) { }
  // private productServiceService: ProductServiceService

  ngOnInit(): void {
    // console.log(this.productServiceService.getProducts());
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
