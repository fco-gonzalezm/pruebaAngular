import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/usuarios/user.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  usuario: any;
  user:User= null;
  userForm: FormGroup;
  constructor(private router:Router, private fb:FormBuilder, private uservice:UsuarioService) {
    this.initForm(); 
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    this.userForm.patchValue(this.user)
    console.log(this.user)
    
  }

  saveUser(){
    this.usuario = this.uservice.getUsers();
    console.log(this.usuario);
    if(!this.user){
      this.user = this.userForm.value;
      this.user.id = this.usuario.length + 1;
     const obj={ ...this.userForm.value,
      'id': this.user.id
    }
      this.usuario.push(obj);
      this.router.navigate(['list']);
    }else{
      console.log(this.userForm.value);
      for(let i = 0; i<=this.usuario.length; i++){
        if(this.usuario[i].id === this.user.id){
           this.usuario[i] = this.userForm.value;
            return this.router.navigate(['list']);
        }else{
          this.user.id = this.usuario.length + 1;  
        }
      }  
    }
    
  }

  backList(){
    this.router.navigate(['list'])
  }

  get valEmail(){
    return this.userForm.get('email')
    }

  initForm(): void{
    console.log(this.user);
    this.userForm = this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      phone : this.fb.group({
        number:[''],
        contrycode:[''],
        citycode:['']
      })
    });
  }
}
