import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private baseUrl = "http://localhost:8080/api/v1/products";

  /*When you then want to execute an HTTP call within the app, you’d have to write something like this, indicating the full path of your backend API.
this.http.get('http://locahost:8080/api/v1/products')
    .map(res => res.json());

    */

  constructor(private http: HttpClient) {}

  getProduct(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
    // .map(res => res.json());
  }

  createProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, product);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getProductsList(): Observable<any> {
    //possibly change 'any' into an observable array list: Observable<Product[]> May need a constructor in product class
    return this.http.get(`${this.baseUrl}`);
  }

  // selectProduct(id: number): Observable<any>{
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }
}
