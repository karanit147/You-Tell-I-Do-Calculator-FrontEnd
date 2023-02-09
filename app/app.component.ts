import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculations';

  checkIfLoggedIn() : boolean{
    if(!!localStorage.getItem('auth')) {
      //return true if loged in
      return true;
    } else {
      return false;
    }
  }

  Logout() {
    localStorage.removeItem('auth')
  }

}
