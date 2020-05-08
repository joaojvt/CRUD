import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductsService,
    private router: Router) { }

  ngOnInit(): void { }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessege('Operação executada com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.productService.showMessege('Operação cancelada!')
    this.router.navigate(['/products'])
  }

}
