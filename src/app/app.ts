import { Component, signal, effect } from '@angular/core';
import { Child } from "./child/child";
import { UserData } from './userData.model';

@Component({
  selector: 'app-root',
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  receivedData = signal<UserData[]>([])

  getFormData(data: any) {
    this.receivedData.update(prev => [...prev, data])


    // const usersData = JSON.stringify(this.receivedData())
    // localStorage.setItem("User-Data", usersData)

    // const getUserData = localStorage.getItem("User-Data")
    // console.log(getUserData);

  }
}