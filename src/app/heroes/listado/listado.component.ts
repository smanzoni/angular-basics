import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = [
    'Spiderman', 'Ironman', 'Hulk', 'Thor'
  ];

  arrVacio = false;
  heroesBorrados: string[] = [];


  
  borrarHeroe(): void {
    const heroeBorrado = this.heroes.shift();
    
    heroeBorrado?.valueOf() != undefined ? this.heroesBorrados.push(heroeBorrado) : this.arrVacio = true;
  }
  
}
