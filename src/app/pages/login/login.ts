import { Component } from '@angular/core';
// import {  LoginDetails } from '../../core/models/userInterface';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // loginInfo = new LoginDetails();
  constructor(private router: Router) {}
  handleClick() {
    // this.employeeService.login(this.loginInfo).subscribe(
    //   (res: API_RESPONSE) => {
    //     if (res.result) {
    //       alert('Successful Login');
    //       localStorage.setItem('ticketData', JSON.stringify(res.data));
    //       this.router.navigateByUrl('/dashboard');
    //     } else {
    //       alert('Login Failed');
    //     }
    //   },
    //   (error) => {
    //     console.error('Login error:', error);
    //     alert('Something went wrong while logging in.');
    //   }
    // // );
    //  if(this.loginInfo.emailId==='' || this.loginInfo.password===''){
    //    alert("fill the correct details");
    //  }else{
    //  localStorage.setItem('ticketData', JSON.stringify(this.loginInfo));
    //  this.router.navigateByUrl('/dashboard');
    //  }
  }
}
