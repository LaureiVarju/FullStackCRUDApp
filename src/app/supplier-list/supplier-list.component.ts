import { Observable } from "rxjs";
import { SupplierService } from "./../supplier.service";
import { Supplier } from "./../suppliers";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-supplier-list",
  templateUrl: "./supplier-list.component.html",
  styleUrls: ["./supplier-list.component.css"]
})
export class SupplierListComponent implements OnInit {
  suppliers: Observable<Supplier[]>;

  constructor(private supplierService: SupplierService) {}

  ngOnInit() {
    this.reloadData();
  }

  // This http request will never fire unless subrscribed. see below
  reloadData() {
    this.supplierService.getSuppliersList().subscribe(value => {
      this.suppliers = value;
    });
  }

  deleteSupplier(id: number) {
    this.supplierService.deleteSupplier(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }
}
