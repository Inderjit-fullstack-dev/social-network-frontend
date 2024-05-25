import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string = '';
  constructor(private fb: FormBuilder, private authService: AuthService) {}

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
        (error) => {
          console.error('Login failed', error);
          this.loginError = 'Invalid email or password'; // Set an error message to display to the user
        }
      );
    }
  }
}
