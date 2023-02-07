import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { divisions, Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })


export class ProductService {
  private productUrl = 'https://localhost:7208/api/EmployeeVsDivision/GetEmployee';  // URL to REST API
  
  constructor(private http: HttpClient) { }
  
  /** GET products from the server */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl + '/products');
  }
  
  /** GET divisions from the server */
  getDivisions(): Observable<divisions[]> {
    return this.http.get<divisions[]>(this.productUrl + '/products');
  }
  
}