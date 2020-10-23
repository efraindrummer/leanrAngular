import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre: string;
  apellido: string;
  excelencia: boolean;

  constructor(){
    this.nombre = this.nombre;
    this.apellido = this.apellido;
    this.excelencia = this.excelencia;
  }
}

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {
  alumno: Alumno = new Alumno();
  listadoAlumnos: Array<Alumno> = new Array<Alumno>();
  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    this.listadoAlumnos.push({
      nombre: this.alumno.nombre,
      apellido: this.alumno.apellido,
      excelencia: this.alumno.excelencia
    })
    nombre: this.alumno.nombre = '';
    apellido: this.alumno.apellido = '';
    excelencia: this.alumno.excelencia = false;

    console.log(this.listadoAlumnos);
  }

}
