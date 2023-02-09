import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalcLogs } from 'src/app/model/calc-logs';
import { User } from 'src/app/model/user';
import { ContolServiceService } from 'src/app/service/contol-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myUserInfo : User = new User();

  // display to master
  studentList !: User[];

  taskId !: number;
  questionAsked !: string;

  // display to student
  myTaskList !: CalcLogs[];

  emailId : any = localStorage.getItem('email');

  constructor(private router : Router, private service : ContolServiceService) { }

  ngOnInit(): void {
    this.getMyUserInfo();
    this.checkIfLoggedIn();
    this.getMyTaskList();
    this.getStudentList();
  }

  checkIfLoggedIn() {
    if(!!localStorage.getItem('auth')) {
      // console.log("logged in");
      
    } else {
      alert("please login");
      this.router.navigate(['']);
    }
  }

  getMyUserInfo() {
    let tempUserInfo = this.service.getUserDetails(this.emailId);
    tempUserInfo .subscribe(data => {
      // console.log(data);
      this.myUserInfo = data;

    });
  }

  logoutUser() {
    localStorage.removeItem('auth');
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }

  getStudentList() {
    this.service.getStudentList().subscribe(data => {
      // console.log(data);      
      this.studentList = data;
    })
  }  

  getMyTaskList() {
    this.service.getSpecificStudentTask(this.emailId).subscribe(data => {
      this.myTaskList = data;
    })
  }  

  checkIfMaster(role : string) : boolean {
    // console.log("role is  - "+role);
    
    if(role === "master") {
      return true;
    }
    return false;
  }

  performAskStudent(email : string) {
    this.service.askStudent(email).subscribe(data => {
      alert("Task assigned for student");
      // console.log(data);
    })
  }

  submitQuestion(assignId : number, input : string) {
    this.service.submitInput(assignId, input).subscribe(data => {
      alert("Submitted input, please check at Activity Log.");
      this.router.navigate(['activityLog']);
      // console.log(data);      
    },
    error => alert("Input in Wrong Format. Try Again")
    );
  }

  assignTaskId(id: any) {
    this.taskId = id;
  }

}
