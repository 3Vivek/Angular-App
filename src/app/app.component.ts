import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common'; // Import CommonModule
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {NavbarComponent} from "./navbar/navbar.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AngularApp';
  showComponent = false;
  ngOnInit(): void {
    initFlowbite();
  }
  renderComponent() {
    this.showComponent = !this.showComponent; // Toggle the value
  }
}
