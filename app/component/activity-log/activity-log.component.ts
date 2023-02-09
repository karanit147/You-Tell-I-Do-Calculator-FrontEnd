import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalcLogs } from 'src/app/model/calc-logs';
import { User } from 'src/app/model/user';
import { ContolServiceService } from 'src/app/service/contol-service.service';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit {

  myUserInfo : User = new User();

  allTaskList !: CalcLogs[];

  constructor(private router : Router, private service : ContolServiceService) { }

  emailId : any = localStorage.getItem('email');

  ngOnInit(): void {
    this.getMyUserInfo();
    this.checkIfLoggedIn();
    this.showActivityList();
  }

  getMyUserInfo() {
    let tempUserInfo = this.service.getUserDetails(this.emailId);
    tempUserInfo .subscribe(data => {
      this.myUserInfo = data;
    });
  }

  checkIfLoggedIn() {
    if(!!localStorage.getItem('auth')) {
      console.log("logged in");
      
    } else {
      alert("please login");
      this.router.navigate(['']);
    }
  }

  logoutUser() {
    localStorage.removeItem('auth');
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }

  showActivityList() {
    this.service.getAllActivityLog().subscribe(data => {
      this.allTaskList = data;
    });
  }

  checkForMyTask(email : string) : boolean {
    if(this.emailId === email) {
      return true;
    }
    return false;
  }

}
