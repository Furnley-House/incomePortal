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
  constructor(private router: Router) { }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  navigateToHome() {
    this.router.navigate(['/dashboard'])
  }
}
