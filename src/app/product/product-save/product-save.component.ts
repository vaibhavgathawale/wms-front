import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import $ from "jquery";


@Component({
  selector: 'app-product-save',
  templateUrl: './product-save.component.html',
  styleUrls: ['./product-save.component.css']
})
export class ProductSaveComponent implements OnInit {

  submitted=false;

  product : Product = new Product();

  constructor(private router : Router,
    private productservice : ProductService) { }

  ngOnInit(): void {
    $("#showlogin").hide();
  }

  save(){
    this.productservice.saveProduct(this.product).subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
  }
  
  onSubmit(){
    
    this.save();
  }

}
