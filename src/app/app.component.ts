import { Component, OnInit } from '@angular/core';
import { Datos } from './components/child/child.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Creando arreglo de datos (parent)
  arreglo: Datos[] = [
    { nombre: 'Miguel', pais: 'Mexico' },
    { nombre: 'Ivette', pais: 'España' },
  ];
  datos: Datos[] = [];

  // Recibiendo en funcion los datos y metiendo en variable
  recibiendo(dato: Datos[]) {
    this.datos = dato;
    console.log(this.datos);
  }
  ngOnInit(): void {}
}
