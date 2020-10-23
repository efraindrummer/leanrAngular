import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
  articulos: Array<Articulo> = new Array<Articulo>();
  constructor(private ruta: Router) { }

  ngOnInit(): void {
    this.articulos.push(
      { 
        nombre: 'Televisor de 24 pulgadas', 
        descripcion: 'Marca Dell con 4 años de garantia', 
        precio: 1500,
        stock: 10, 
        precioMayorista: 1400
      },
      { 
        nombre: 'Laptop i5', 
        descripcion: 'Laptop nueva con 8gb ram', 
        precio: 15000,
        stock: 20, 
        precioMayorista: 1400
      }, 
      { 
        nombre: 'Monitor', 
        descripcion: 'Monitor curvo con pantalla HD', 
        precio: 8000,
        stock: 256, 
        precioMayorista: 7500
      },
      {
        nombre: 'Pantalla plana', 
        descripcion: 'Pantalla Full-HD ', 
        precio: 5000,
        stock: 25, 
        precioMayorista: 5500
      }
      )
  }

  pasarParametro(articuloRecibido: Articulo){
    this.ruta.navigate(['articuloDetalle', {articulo: JSON.stringify(articuloRecibido) }])
  }
}
