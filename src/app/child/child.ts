import { Component, OnInit, output, Pipe, signal} from '@angular/core';

import { UserData } from '../userData.model';
import { FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [FormsModule, DatePipe],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnInit {

  userData = signal({
    title: '',
    userName: '',
    userCity: '',
    userAge: null,
    userRole: ''
  })

  currentDate = signal(new Date())

  ngOnInit() {
    setInterval(() => {
      this.currentDate.set(new Date())
    }, 1000)
  }

  userForm = output<UserData>()

  onSubmit() { 
    this.userForm.emit(this.userData())
    this.userData.set({
      title: '',
      userName: '',
      userCity: '',
      userAge: null,
      userRole: ''
    })
  }

  isFormValid() {
    return (
      this.userData().title.trim() !== '' &&
      this.userData().userName.trim() !== '' &&
      this.userData().userCity.trim() !== '' &&
      this.userData().userAge !== null &&
      this.userData().userRole.trim() !== ''
    )
  }
}