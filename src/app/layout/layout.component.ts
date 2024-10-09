import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  showCustomHeader = false;
  steps = ['Basic info', 'Relationships', 'Health', 'Vulnerability', 'Employment', 'Income', 'Expenditure', 'Assets', 'Liabilities'];
  activeStep = 0;


  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/sign-in'])
  }

  previous(): void {
  }
  saveAndNext(): void {
    this.showCustomHeader = true;
    this.router.navigate(['/dashboard/basic-info'])
  }
  home() {
    this.showCustomHeader = false;
    this.router.navigate(['/dashboard'])
  }


  // Methods to handle step click can be added here
  setActiveStep(index: number): void {
    this.activeStep = index;
  }
}
