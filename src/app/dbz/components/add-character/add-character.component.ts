import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //Es el emisor de eventos de este component, se decora con
  //el @Output
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


   public character: Character ={
    name: '', power:0
   }

   emitCharacter():void{

     if (this.character.name.length === 0){
      return;
     }
     this.onNewCharacter.emit(this.character); //se llama al emisor de eventos de este component
     this.character = { name: '', power:0};    //limpiar objeto

   }

}
