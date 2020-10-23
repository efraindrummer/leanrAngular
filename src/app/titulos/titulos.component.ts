import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
  nombre:string = 'Maria'
  apellido:string = 'Perez'
  inputNuevo: string = 'Hola soy un Input'

  correo:string = ''
  password:string = ''

  alumno: any = {
    nombre: 'Carlos',
    apellido: 'Pineda',
    edad: 21
  }

  imagen: string = 'https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'

  constructor() { }

  ngOnInit(): void {  
  }

  ingresar(){

    console.log(this.correo);
    console.log(this.password);
  }

  llamarAlert(){
    alert('Has presionado un doble click')
  }

  escribirModelo(){
    console.log(this.password);
  }

  escribirCorreo(){
    this.password = this.correo;
    console.log(this.correo);
    console.log(this.password);
  }

  escribir(evento){
    console.log(evento.target.value);
  }

  colorearFondo(evento){
    evento.srcElement.style.background = "red";
    evento.srcElement.style.width = "200px";
  }

  cambiarTamano(evento){
    evento.srcElement.style.width = "500px";
    evento.srcElement.style.heigth = "200px";
    evento.srcElement.style.border = "1px solid red";
  }

  incrementarTamano(evento){
    evento.srcElement.style.width = "800px";
    evento.srcElement.style.heigth = "400px";
    evento.srcElement.style.border = "1px solid green";
  }

}
