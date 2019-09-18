import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  data: Product[] = [];
  displayedColumns: string[] = ['prodName', 'prodDesc', 'prodPrice', 'icon-update', 'icon-delete'];
  isLoadingResults = true;


  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.data = products;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(
      data => this.refresh(data))
  }

  refresh(data) {
    console.log('data', data);
    this.productService.getProducts().subscribe(data => {
      this.data = data;
    });
  }

}
