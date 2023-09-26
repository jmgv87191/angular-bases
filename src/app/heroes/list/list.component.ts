import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {


  public heroNames: string[]=[ 'Spiderman', ' Ironman', 'hulk', 'she hulk', 'thor' ]
  borrado?: string = '';

  borrarHeroe():void{
    this.borrado = this.heroNames.pop();
    console.log(this.borrado)
  } 

}
