import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class UserService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'http://localhost:8080/api/';
  }
  getUsers(): Observable<any> {
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.get(this.url + 'getusers/', { headers: headers });
  }
}
