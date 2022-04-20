import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {Product, ResponseProduct} from "../shared/interfaces/product.interface";
import {catchError, mergeMap, of} from "rxjs";

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((result: ResponseProduct) => {
      if (result && result.products) {
        this.products = result.products;
      }
    });
  }

  openProduct(id: number) {
    this.productService.getProduct(id)
      .pipe(
        mergeMap(product => {
          return this.productService.getProduct(product.stock);
        }),
        catchError(err => {
          console.log(err);
          return of(null);
        }),
      )
      .subscribe(product => {
        console.log(product);
      });
  }
}
