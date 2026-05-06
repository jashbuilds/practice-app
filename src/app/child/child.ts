import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})

export class Child {
  userName = input.required<string>();
  userCity = input.required<string>();
  userAge = input.required<number>();
  userRole = input.required<string>();
}