import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as usuarios from '../data/usuarios.json';
import { User } from '../usuarios/user.interface';
import { Usuarios } from '../usuarios/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  users: any;
  constructor() { }


  getUsers(): Observable<Array<User>>{
    this.users = (usuarios as any).Usuarios
    return this.users; 
  }

}
