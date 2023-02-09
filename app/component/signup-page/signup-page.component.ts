import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContolServiceService } from 'src/app/service/contol-service.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private router : Router, private service : ContolServiceService) { }

  tempUser : User = new User();

  role : any = "student";

  response : any;

  ngOnInit(): void {
  }

  onChange(e : any) {
    this.role = e.target.value;
  }

  onSubmit() {    
    this.tempUser.role = this.role;
    // console.log(this.tempUser.role);
    let response = this.service.signUpUser(this.tempUser);
    response.subscribe(data => {
      this.response = data;
      // console.log(this.response);
      alert("Succefully created Account, Please Login!");
      this.router.navigate(['login']);
    },
    error => console.log("User with email already exists.")
    );
  }
}
