import { Observable } from "rxjs";
import { ProductService } from "./../product.service";
import { Product } from "./../products";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator, PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;
  displayedColumns: string[] = [
    "name",
    "fullPrice",
    "salePrice",
    "discountPercentage",
    "availability",
    "categoryId",
    "supplierId",
    "action1",
    "action2"
  ];
  dataSource = new MatTableDataSource();

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(",").map(str => +str);
  }

  constructor(private productService: ProductService) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    console.log("inside the oninit func");

    this.reloadData();
  }

  // This http request will never fire unless subrscribed. see below
  reloadData() {
    console.log("inside of the reload data func");
    this.productService.getProductsList().subscribe(value => {
      this.products = value.content;
      this.dataSource = value.content;
      this.dataSource.sort = this.sort;
      console.log("This is below this.products" + this.products);
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  // This is my own attempts underneath
  createProduct(id: number) {
    this.productService.createProduct(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );

    /*

export class TableSortingExample implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;



    */

    //   selectProduct(id: number) {
    //     console.log("Selected item Id: ", product.id); // You get the Id of the selected item here
    // }

    // updateProduct(id: number) {  //this is to commit changes, this is a submission button we need something to get id.
    //   this.productService.updateProduct(id: number, value: any).subscribe(
    //     data => {
    //       console.log(data);
    //       this.reloadData();
    //     },
    //     error => console.log(error)
    //   );
  }

  /* This is a mess I need coffee here on down

updateProduct(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    onSelect(id: number) {
      this.productService.onSelect(id).subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
    console.log("Selected item Id: ", id); // You get the Id of the selected it

    updateProduct(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }
*/
  // updateProduct(id: number) { //going to have to make a service or a component for this one I think
  //   this.productService.updateProduct(id).subscribe(
  //     data => {
  //       console.log(data);
  //       this.reloadData();
  //     },
  //     error => console.log(error)
  //   );

  /*

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

  */
}
