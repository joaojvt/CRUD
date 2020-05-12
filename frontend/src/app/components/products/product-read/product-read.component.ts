import { ProductDeleteDialogComponent } from './../product-delete-dialog/product-delete-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action'];
  dataSource: Product[];

  constructor(private productService: ProductsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  openDeleteDialog(product: Product): void {
    const deleteDialogRef = this.dialog.open(ProductDeleteDialogComponent, {
      data: product
    });

    deleteDialogRef.afterClosed().subscribe(result => {
      this.loadData()
    });
  }

  loadData(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}
