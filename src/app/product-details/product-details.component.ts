import { Observable } from "rxjs";
import { Product } from "./../products";
import { Component, OnInit, Input } from "@angular/core";
import { ProductService } from "../product.service";
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private productService: ProductService,
    private listComponent: ProductListComponent
  ) {}

  ngOnInit() {}
}
