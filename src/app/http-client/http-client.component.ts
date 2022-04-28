import {Component, OnInit} from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {Product, ResponseProduct} from "../shared/interfaces/product.interface";
import {
  catchError,
  concatMap,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  from, fromEvent, interval,
  map,
  mergeMap,
  of,
  switchMap, takeUntil,
} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {BaseComponent} from "../base.component";

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent extends BaseComponent implements OnInit {
  products: Product[] = [];

  searchForm = new FormGroup({
    query: new FormControl(''),
  });

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .pipe(takeUntil(this.destroyed))
      .subscribe((result: ResponseProduct) => {
        if (result && result.products) {
          this.products = result.products;
        }
      });

    this.searchForm.get('query')?.valueChanges
      .pipe(
        // filter(query => query.length > 2),
        debounceTime(300),
        distinctUntilChanged(),
        /*map(query => {
          const array = [];
          for (let i = 0; i < 5; i++) {
            array.push({
              productName: query + '-' + i,
              time: new Date(),
            });
          }
          return array;
        }),*/
        switchMap(query => this.productService.searchProducts({ q: query })),
        map(res => res?.products || []),
        takeUntil(this.destroyed),
      )
      .subscribe(products => {
        this.products = products;
      });

    /*from([1, 2, 3, 4, 5])
      .pipe(
        concatMap(id => {
          return this.productService.getProduct(id).pipe(
            delay(500),
          );
        }),
      )
      .subscribe(res => {
        console.log(res);
      });*/

    const source = interval(1000);
    // const clicks = fromEvent(document, 'click');
    // const result = source.pipe(takeUntil(clicks));
    source.pipe(takeUntil(this.destroyed)).subscribe((x: any) => console.log(x));
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
        takeUntil(this.destroyed),
      )
      .subscribe(product => {
        console.log(product);
      });
  }
}
