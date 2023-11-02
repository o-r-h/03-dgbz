import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

   // para llenar los valores iniciales de la lista
   public charactersMainList: Character[] = [
    { id: uuid(), name: 'Krillin' , power: 1000 },
    { id: uuid(), name: 'Goku' , power: 9800},
    { id: uuid(), name: 'Nappa' , power:5000},
    { id: uuid(), name: 'Vegeta' , power:8300}

 ];

 AddCharacter(character: Character):void{

    const newCharacter: Character ={
      id: uuid(),
      ...character //
    }
    this.charactersMainList.push(newCharacter);
 }

 DeleteCharacterById(id: string){

  this.charactersMainList = this.charactersMainList.filter(character =>character.id !==id);
 }


}
