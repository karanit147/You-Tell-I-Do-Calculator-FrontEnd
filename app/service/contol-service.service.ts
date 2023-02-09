import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginCred } from '../model/login-cred';
import { User } from '../model/user';
import { CalcLogs } from '../model/calc-logs';

@Injectable({
  providedIn: 'root'
})
export class ContolServiceService {

  private baseURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  loginUser(loginCred : LoginCred) : Observable<any> {
    return this.httpClient.post(`${this.baseURL}/login`, loginCred);
  }

  signUpUser(user : User) : Observable<any> {
    return this.httpClient.post(`${this.baseURL}/signUp`, user);
  }

  getUserDetails(email : String) : Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/findUserDetail/${email}`);
  }

  getStudentList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}/getUserList/0`);
  }

  getSpecificStudentTask(email : String) : Observable<CalcLogs[]> {
    return this.httpClient.get<CalcLogs[]>(`${this.baseURL}/activityLog/${email}`);
  }

  askStudent(email : String) : Observable<any> {
    return this.httpClient.get(`${this.baseURL}/askStudent/${email}`);
  }

  submitInput(taskId: number, input : string) : Observable<CalcLogs> {
    return this.httpClient.get<CalcLogs>(`${this.baseURL}/submitActivity/${taskId}/${input}`);
  }

  getAllActivityLog() : Observable<CalcLogs[]> {
    return this.httpClient.get<CalcLogs[]>(`${this.baseURL}/activityLog`);
    
  }

}
