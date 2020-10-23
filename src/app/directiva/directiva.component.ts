import { Component, OnInit } from '@angular/core';
import { flatten } from '@angular/compiler';

interface Producto{
  nombre:string;
  stock:number;
  fabricante:string;
  fechaVence:Date;
  esImportante: boolean;
  textoGrande: boolean;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {
  cargando:boolean = true;
  nombres: Array<string> = ["Maria","Pedro","Juan","Ana"];
  pestana:string = '';
  productos: Array<Producto> = [
    {
      nombre: 'Arroz',
      stock: 15,
      fabricante: 'Distribuidor industrial',
      fechaVence: new Date('04/15/2020'),
      esImportante: false,
      textoGrande: true
    },
    {
      nombre: 'Maiz',
      stock: 25,
      fabricante: 'Distribuidor industrial',
      fechaVence: new Date('05/15/2021'),
      esImportante: true,
      textoGrande: false
    },
    {
      nombre: 'Refresco',
      stock: 200,
      fabricante: 'Distribuidor Pepsi',
      fechaVence: new Date('01/15/2024'),
      esImportante: false,
      textoGrande: true
    }
  ];
  mostrarCuadrado:boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;
    }, 5000);
  }

  alternar(){
    this.cargando == !this.cargando;
  }

  cambiarPestana(pestana: string){
    this.pestana = pestana;
  }

  alternarFondo(){
    this.mostrarCuadrado = this.mostrarCuadrado = true;
  }
}
