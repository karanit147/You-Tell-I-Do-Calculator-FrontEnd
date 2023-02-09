import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCred } from 'src/app/model/login-cred';
import { ContolServiceService } from 'src/app/service/contol-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginCred : LoginCred = new LoginCred();

  constructor(private router : Router, private service : ContolServiceService) { }

  ngOnInit(): void {
    this.checkIfLoggedIn();
  }

  permission : any;

  isLoggedIn : any;

  onSubmit() {
    let response = this.service.loginUser(this.loginCred);
    response.subscribe(data => {
      this.permission = data;
      console.log(this.permission);
      this.checkIfAuthorized();
    },
    error => console.log("Wrong Credentials")
    );
  }

  checkIfAuthorized() {
    if(this.permission) {
      localStorage.setItem('auth', 'auth');
      localStorage.setItem('email', this.loginCred.email);
      this.router.navigate(['dashboard']);
    } else {
      alert("Wrong Credentials");
    }
  }

  checkIfLoggedIn() {
    if(!!localStorage.getItem('auth')) {
      // loged in
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

}
