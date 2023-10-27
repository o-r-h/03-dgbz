import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public deletedHero: string|undefined="";
  public heroNames: string[] = ['Spiderman', 'Ironman',
                                 'Thor','Star Lord'];


  removeLastHero():void {
    this.deletedHero= this.heroNames.pop();
    console.log(this.deletedHero);
  }

}
