import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  public title: string = 'Mi primera app';
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

