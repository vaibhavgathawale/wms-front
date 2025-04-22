import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.component';
import { LoginService } from 'src/app/service/login.service';
import $ from "jquery";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    
    $("#showlogout2").hide();

  }


  checklogin(user : Object){
    this.loginService.checkingcredentials(this.user).subscribe(data => console.log(data), error => console.log(error));



  }
}
