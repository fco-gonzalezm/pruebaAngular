import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/usuarios/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user:User= null;
  users: any;
  navigation: NavigationExtras = {
    state:{
      value:null
    }
  };

  constructor(private router: Router, private uservice:UsuarioService) { }

  ngOnInit(): void {
    this.getUsers();
    console.log(this.users);
  }

  getUsers() {
    this.users = this.uservice.getUsers();
  }

  editUser(user:any):void{
    console.log("click");
    this.navigation.state.value = user;
    this.router.navigate(['edit'], this.navigation);
  }

  deleteUser(user:any):void{
    console.log(user);
    console.log(this.users);
    for(let i=0; i<=this.users.length; i++){
      console.log(this.users[i].name);
      console.log(user);

      if(this.users[i].name === user){
        console.log(i);
        return this.users.splice(i, 1);
      }
    }
  }

  createUser(){
    this.router.navigate(['edit'], this.navigation);
  }
}
