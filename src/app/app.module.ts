import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateProductComponent } from "./create-product/create-product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { HttpClientModule } from "@angular/common/http";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { SupplierListComponent } from "./supplier-list/supplier-list.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material";
import { MatSortModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    SupplierListComponent,
    CategoryListComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MatSliderModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
