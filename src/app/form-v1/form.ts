import { Component } from '@angular/core';
import { Input } from '../input/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserSignInForm } from '../shared/form.interface';
import { passwordCheck } from '../shared/validators';

@Component({
  selector: 'app-form',
  imports: [Input, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class FormV1 {
  formGroup = new FormGroup<UserSignInForm>({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    recheckPassword: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  }, passwordCheck)

  onSubmit() {
    console.log(this.formGroup.value)
    console.log(this.formGroup.invalid)
  }
}
