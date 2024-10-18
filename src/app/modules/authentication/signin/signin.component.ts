import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  // standalone: true,
  // imports: [],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';  
  constructor(private router: Router) { }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  // navigateToHome() {
  //   this.router.navigate(['/dashboard']);
  // }
  navigateToHome() {
    if (this.email && this.password) {
      if (this.email.trim() === 'srinath' && this.password.trim() === 'password123') {
        localStorage.setItem('isAuthenticated', 'true');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Please enter email and password');
    }
  }
}
