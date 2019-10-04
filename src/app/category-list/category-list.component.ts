import { Observable } from "rxjs";
import { CategoryService } from "./../category.service";
import { Category } from "./../categories";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.css"]
})
export class CategoryListComponent implements OnInit {
  categories: Observable<Category[]>;

  constructor(private productService: CategoryService) {}

  ngOnInit() {
    this.reloadData();
  }

  // This http request will never fire unless subrscribed. see below
  reloadData() {
    this.productService.getCategoryList().subscribe(value => {
      this.categories = value;
    });
  }

  deleteCategory(id: number) {
    this.productService.deleteCategory(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  // This is my own attempts underneath
  createCategory(id: number) {
    this.productService.createCategory(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }
  // updateCategory(id: number) { //going to have to make a service or a component for this one I think
  //   this.productService.updateCategory(id).subscribe(
  //     data => {
  //       console.log(data);
  //       this.reloadData();
  //     },
  //     error => console.log(error)
  //   );
}
