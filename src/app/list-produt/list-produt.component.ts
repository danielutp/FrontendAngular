import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/IProduct';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list-produt',
  templateUrl: './list-produt.component.html',
  styleUrls: ['./list-produt.component.css']
})
export class ListProdutComponent implements OnInit {

  listProducts: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsAll();
    console.log(this.listProducts + 'prueba');
  }

  productsAll() {
    this.productsService.getproducts().subscribe(
      data => {
        this.listProducts = data;
      }
    );
  }
}


