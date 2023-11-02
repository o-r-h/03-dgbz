import { Component ,EventEmitter,Input, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


    @Input() // indica que se expone a otros componentes
    public characterList: Character[]=[];

    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();


    onDeleteCharacter(id?: string):void {
      this.onDelete.emit(id);

    }


}
