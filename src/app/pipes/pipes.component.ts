import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  titulo:string = "Hola soy un titulo";
  dinero:number = 2400;
  ganancias:number = 0.54;

  textoLargo:string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, placeat, ipsam inventore maxime eveniet error vero at alias, nihil culpa iure debitis nisi ab assumenda facilis mollitia amet! Porro, error.";

  fechaNacimiento:Date = new Date('06-1-2019');
  constructor() { }

  ngOnInit(): void {
  }

}
