import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    const loggedIn = localStorage.getItem('currentUser');
    if (loggedIn) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['john@doe.com', [Validators.required, Validators.email]],
      password: ['Welcome12@#', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (response) => {
          console.log('Login successful', response);
          // Optionally, you can navigate to another route upon successful login
        },
        (err) => {
          console.error('Login failed', err);
          this.loginError = 'Invalid email or password'; // Set an error message to display to the user
        }
      );
    }
  }
}
