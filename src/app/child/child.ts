import { Component, output, signal } from '@angular/core';

import { UserData } from '../userData.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  userData = signal({
    title: '',
    userName: '',
    userCity: '',
    userAge: null,
    userRole: ''
  })

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

  updateField(field: string, value: any) {
    this.userData.update(prev => ({ ...prev, [field]: value }))
  }

  isFormValid() {
    const age = this.userData().userAge
    return (
      this.userData().title.trim() !== '' &&
      this.userData().userName.trim() !== '' &&
      this.userData().userCity.trim() !== '' &&
      age !== null && age >= 18 &&
      this.userData().userRole.trim() !== ''
    )
  }

  isAgeValid() {
    const age = this.userData().userAge

    return age !== null && age < 18
  }

  onInput(event: any) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }

}