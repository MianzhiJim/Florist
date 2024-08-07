import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, PasswordModule, CommonModule, ReactiveFormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',

})
export class DialogComponent {
  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  @Input() visible: boolean = false;
  @Output() closeDialog = new EventEmitter(!this.visible);
  toggleRegisterLogin: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  showDialog() {
    this.visible = true;
  }
  get loginControls() {
    return this.loginForm.controls;
  }

  get email() {
    return this.loginForm.get('email');
  }

  get signUpControls() {
    return this.signUpForm.controls;
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.closeDialog.emit(false);
    }
  }

  onSignUpSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      this.closeDialog.emit(false);
    }
  }
}
