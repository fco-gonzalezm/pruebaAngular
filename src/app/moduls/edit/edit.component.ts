import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/usuarios/user.interface';
import { Usuarios } from 'src/app/usuarios/usuarios';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  usuario: any;
  user:User= null;
  userForm: FormGroup;
  email = /\S+@\S+\.\S+/;
  constructor(private router:Router, private fb:FormBuilder, private uservice:UsuarioService) {
    this.initForm() 
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation?.extras?.state?.value;
  }

  ngOnInit(): void { 
    console.log("save", this.user);
    
    this.userForm.patchValue(this.user)
  }

  saveUser(){
    this.usuario = this.uservice.getUsers();
    if(!this.user){
      this.user = this.userForm.value;
      this.user.id = this.usuario.length + 1;
      this.usuario.push(this.userForm.value)
    }else{
      for(let i = 0; i<=this.usuario.length; i++){
        if(this.usuario[i].name === this.user.name){
          console.log(this.usuario);
          return this.usuario[i] = this.userForm.value;
        }
      } 
  
    }
  }

  backList(){
    this.router.navigate(['list'])
  }

  initForm(): void{
    this.userForm = this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required, Validators.pattern(this.email)]],
      password:['', [Validators.required]],
      phone:['', [Validators.required]]
     /*  email:['', [Validators.required]], */
    });
  }
}
