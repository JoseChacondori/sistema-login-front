import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  public user={
    username:'',
    contrasena:'',
    nombre:'',
    apellido:'',
    email:'',
    telefeno:''
  }

  constructor(private userService:UserService, private snack:MatSnackBar){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  
  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snack.open("El nombre de usuario es requerido", 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    //retorna un observable(datos que contiene) en la api
    //observer pendiente del datos suscrito
    this.userService.sumarUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Usuario guardado', 'Usuario Registrado con exito en el sistema', 'success')
      },(error) =>{
        console.log(error);
        alert("Error del sistema")
        this.snack.open("Ha ocurrido un error en el sistema", 'Aceptar', {
          duration: 3000,
        });
      }
    )
  }
}
