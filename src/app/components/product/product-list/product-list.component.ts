import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.listProducts().subscribe(products => {
      this.products = products
    })
  }

}
