import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { map } from 'rxjs';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }

  public loginForm: FormGroup = new FormGroup({});
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  
  
  ngOnInit(): void {
    this.router.navigate(['app/home']);
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      }
    )
  }
  loginUser(): void {
    this.isLoading = true;
    if (this.loginForm.get('email')?.errors?.['required'] || this.loginForm.get('password')?.errors?.['required']) {
      this.isLoading = false;
      Swal.fire('Ningún campo puede estar vacío.');
    } else {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).pipe(map((value)=>value.token)).subscribe({
        next: token => {
          localStorage.setItem('token', token);
          this.router.navigate(['app/home']);
          this.isLoading = false;
        },
        error: () => {
          Swal.fire('Credenciales inválidas.');
          this.isLoading = false;
        }
      });
    }
  }
}
