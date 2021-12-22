import { Component, OnInit } from '@angular/core';
import { Datos } from './components/child/child.interface';
import { User } from './services/user.model';
import { UserService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  arreglo: User[] = [];
  datos: User[] = [];

  constructor(public _userService: UserService) {}

  // Recibiendo en funcion los datos y metiendo en variable
  recibiendo(dato: User[]) {
    this.datos = dato;
    console.log(this.datos);
  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(
      (response) => {
        this.arreglo = response.users;
        console.log(this.arreglo);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
