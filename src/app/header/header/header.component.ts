import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from "jquery";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    $("#showlogout").hide();

  }


  gotoList(){
    this.router.navigate(['/login']);
  }

  logouthome(){
    this.router.navigate(['/login']);
  }
}
