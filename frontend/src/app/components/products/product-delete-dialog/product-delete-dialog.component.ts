import { Product } from './../product.model';
import { ProductsService } from './../products.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-delete-dialog',
  templateUrl: './product-delete-dialog.component.html',
  styleUrls: ['./product-delete-dialog.component.css']
})
export class ProductDeleteDialogComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductsService,
    public dialogRef: MatDialogRef<ProductDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product) { }

  ngOnInit(): void {
    this.product = this.data
  }

  deleteProduct(): void {
    const id = this.product.id.toString()
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessege('Produto Apagado!')
    })
  }

  cancel(): void {
    this.productService.showMessege('Operação cancelada!')
  }

}
