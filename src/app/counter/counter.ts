import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})

export class Counter {
  count = model<number>(0)

  updateCount(amount: number) {
    this.count.update(cnt => cnt + amount)
  }
}