import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id').split(':')[1]
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id').split(':')[1]
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessege('Produto Apagado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.productService.showMessege('Operação cancelada!')
    this.router.navigate(['/products'])
  }

}
