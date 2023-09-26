import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeAge():void{
    this.age = 25
  }

  changeHero():void{
    this.name = 'spiderman'
  }

  reset():void{
    this.name = 'ironman'
    this.age = 45
  }

}

