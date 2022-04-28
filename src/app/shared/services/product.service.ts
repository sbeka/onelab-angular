import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Product, ResponseProduct} from "../interfaces/product.interface";

interface ProductFilterModel {
  query: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com';

  constructor(private httpClient: HttpClient) { }

  getProducts(params = {}): Observable<ResponseProduct> {
    return this.httpClient.get<ResponseProduct>(`${this.apiUrl}/products`, {
      params,
    });
  }

  searchProducts(params = {}): Observable<ResponseProduct> {
    return this.httpClient.get<ResponseProduct>(
      `${this.apiUrl}/products/search`,
      { params },
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  addProduct(body: Product): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/products`, body);
  }

  editProduct(id: number, body: Product): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/products/${id}`, body);
  }

  removeProduct(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/products/${id}`);
  }
}
