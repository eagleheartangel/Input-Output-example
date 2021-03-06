import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Datos } from './child.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  // Input (trayendo datos de parent)
  @Input('arreglo') arreglo: Datos[] = [];

  // Output (enviando evento con datos a parent)
  @Output() enviar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // Mostrando Objeto traido de parent
    console.log(this.arreglo);
  }
  // Enviando arreglo a parent
  enviando() {
    this.enviar.emit(this.arreglo);
  }
}
