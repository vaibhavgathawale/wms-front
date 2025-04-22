import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    $("#showlogin").hide();

  }

  gotoAddProduct(){

    this.router.navigate(["/product-save"]);
  }

}
