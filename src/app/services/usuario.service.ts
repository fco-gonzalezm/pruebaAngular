import { Injectable } from '@angular/core';
import { rejects } from 'assert';
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


  getUsers(): Observable<Array<Usuarios>>{
    this.users = (usuarios as any).Usuarios
    console.log(this.users.length)
    return this.users; 
  }

  saveUser(userid: number, user:User): Promise<any>{
    return new Promise(async (resolve, reject)=>{
      try{
        this.getUsers();
        const id = userid || this.users.length + 1;
        const data = { id, ...user};
        const rsp = data;
        resolve(rsp);
      }catch(err){
        reject(err.message);
      }
    });
  }


/*   newUsers: Usuarios = new Usuarios();

  addUser(){
    this.getUsers();
    console.log(this.users);
    this.newUsers.id = this.users.length + 1;
    return this.users.push(this.newUsers); 
    const q = this.users.push(this.newUsers);
    console.log("q ", this.newUsers);
    return q;
 
  } */

}
