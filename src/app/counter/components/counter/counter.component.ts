import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h4>{{ counter}}</h4>
  <button (click)="increase()">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="decrese()">-1</button>`,
})
export class CounterComponent{

  public counter: number = 10;

  increase(): void {
    this.counter+=1;
 }
 decrese(): void {
   this.counter-=1;
 }
 reset(): void{
   this.counter=0;
 }


}

