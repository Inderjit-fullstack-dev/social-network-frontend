import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      lookingFor: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Handle the form submission, e.g., send data to a server
    } else {
      console.log('Form is not valid');
      // Handle the case where the form is not valid
    }
  }
}
