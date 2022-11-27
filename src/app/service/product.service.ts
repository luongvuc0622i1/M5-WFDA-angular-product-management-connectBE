import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    // {
    //   id: 1,
    //   name: 'IPhone 12',
    //   price: 2400000,
    //   description: 'New'
    // },
    // {
    //   id: 2,
    //   name: 'IPhone 11',
    //   price: 1560000,
    //   description: 'Like new'
    // },
    // {
    //   id: 3,
    //   name: 'IPhone X',
    //   price: 968000,
    //   description: '97%'
    // },
    // {
    //   id: 4,
    //   name: 'IPhone 8',
    //   price: 7540000,
    //   description: '98%'
    // },
    // {
    //   id: 5,
    //   name: 'IPhone 11 Pro',
    //   price: 1895000,
    //   description: 'Like new'
    // }
  ]
  constructor(private http: HttpClient) { }
  //show list
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/products/list');
  }
  //create
  saveProduct(product: any): Observable<Product> {
    return this.http.post<Product>(API_URL + '/products/create', product);
  }
  //edit
  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/find/${id}`);
  }
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/products/update/${id}`, product);
  }
  //delete
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/products/delete/${id}`);
  }
}
