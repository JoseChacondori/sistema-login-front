import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loingData = {
    "username": '',
    "password": ''
  }

  constructor(private snack:MatSnackBar){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  forSubmit(){
    if(this.loingData.username.trim() == '' || this.loingData.username.trim() == null){
      this.snack.open("Nombre de usuario es requerido", 'Aceptar',{
        duration:3000
      })
      return;
    }

    if(this.loingData.password.trim() == '' || this.loingData.password.trim() == null){
      this.snack.open("Contraseña requerida", 'Aceptar',{
        duration:3000
      })
      return;
    }
    //falta mejorar con spring security y CORS
    /* if(this.loingData.username != null){
      const accion = (home) => {
        console.info("Login completo");
        [RouterLink] = "'/'"
      }
      alert(accion)
    } */
  }
}
