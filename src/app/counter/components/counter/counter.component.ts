import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {



  counter = 10;


  operacion( numero: number ){
    this.counter += numero
  }

  reset(){
    this.counter = 10;
  }

}
