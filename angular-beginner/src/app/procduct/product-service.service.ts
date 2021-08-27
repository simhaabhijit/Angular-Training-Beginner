import { Injectable } from '@angular/core';
import { appConstants } from '../constants';

@Injectable(
  {
  providedIn: 'root'
}
)
export class ProductServiceService {

  appConstants = appConstants;

  constructor() { }

  getProducts() {
    return this.appConstants.products;
  }
}
