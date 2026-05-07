import { Component, signal } from '@angular/core';
import { Child } from './child/child';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [FormsModule, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title = signal('')
  userName = signal('')
  userCity = signal('')
  userAge = signal(undefined)
  userRole = signal('')
}