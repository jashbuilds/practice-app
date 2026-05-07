import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
   name = "jash"
  title = model<string>('')
  userName = model<string>('')
  userCity = model<string>('')
  userAge = model<number>()
  userRole = model<string>('')

}