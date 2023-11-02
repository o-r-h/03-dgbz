import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pag.component.html'
})

export class MainPageComponent  {
   //se inyecta el servicio de dbz que tiene toda la logica de negocio y manipulacion de datos
   constructor ( private dbzService: DbzService){}

   get charactersMainList(): Character[]{
    return [...this.dbzService.charactersMainList];
   }

   onDeleteCharacterById( id: string):void{
       this.dbzService.DeleteCharacterById(id);
   }

   onNewCharacter( character: Character){
       this.dbzService.AddCharacter(character);
   }

}
