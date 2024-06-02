import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),  
    password: new FormControl("", Validators.required)
  });

  funIngresar() {
    this.authService.loginConNest(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}