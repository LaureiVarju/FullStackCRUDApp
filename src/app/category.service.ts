import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  private baseUrl = "http://localhost:8080/api/v1/categories";

  /*When you then want to execute an HTTP call within the app, you’d have to write something like this, indicating the full path of your backend API.
this.http.get('http://locahost:8080/api/v1/categories)
    .map(res => res.json());

    */

  constructor(private http: HttpClient) {}

  getCategory(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
    // .map(res => res.json());
  }

  createCategory(category: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, category);
  }

  updateCategory(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getCategoryList(): Observable<any> {
    //possibly change 'any' into an observable array list: Observable<Supplier[]> May need a constructor in supplier class
    return this.http.get(`${this.baseUrl}`);
  }
}
