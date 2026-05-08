import { Component, signal } from '@angular/core';
import { Child } from "./child/child";

@Component({
  selector: 'app-root',
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  receivedData = signal<any>(null)

  getFormData(data: any) {
    this.receivedData.set(data)
  }
}