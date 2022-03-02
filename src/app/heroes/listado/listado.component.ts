import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Capitan America','Thor'];
  heroeBorrado: string = '';

  borrarHeroe(){
    
    // pop() borra ultimo elemento del array
    
    this.heroeBorrado = this.heroes.shift() || '';
    
  }

  
}
