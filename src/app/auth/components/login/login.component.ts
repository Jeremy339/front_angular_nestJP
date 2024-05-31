import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private http = inject(HttpClient)
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),  ////Valores por defecto
    password: new FormControl("", Validators.required)    ////Valores por defecto
  })

  funIngresar() {
    this.http.get("http://jsonplaceholder.typicode.com/todos").subscribe(
      (res)=>{
        console.log(res)
      },
      (error)=>{
        console.log(error)
      }
    )
    ////alert("Ingresando...")
  }
}
