import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/procduct/product-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor( private productServiceService: ProductServiceService) { }

  ngOnInit(): void {
    console.log(this.productServiceService.getProducts());

  }

}
