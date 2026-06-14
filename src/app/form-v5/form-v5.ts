import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserSignInForm } from '../shared/form.interface';
import { passwordCheck } from '../shared/validators';
import { Input } from '../input/input';
import { compatForm } from '@angular/forms/signals/compat';
import { JsonPipe } from '@angular/common';
import { SignalInput } from '../signal-input/signal-input';

@Component({
  selector: 'app-form-v5',
  imports: [Input, ReactiveFormsModule, JsonPipe, SignalInput],
  templateUrl: './form-v5.html',
  styleUrl: './form-v5.scss',
})
export class FormV5 {
  formGroup = new FormGroup<UserSignInForm>({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    recheckPassword: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  }, passwordCheck)

  userSignIn = signal(this.formGroup)

  form = compatForm(this.userSignIn);

  onSubmit() {
    console.log(this.formGroup.value)
    console.log(this.formGroup.invalid)
  }
}
