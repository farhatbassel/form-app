import { Component, signal } from '@angular/core';
import { UserSignIn } from '../shared/form.interface';
import { form, FormField, required, validate } from '@angular/forms/signals';
import { Input } from '../input/input';

@Component({
  selector: 'app-form-v2',
  imports: [Input, FormField],
  templateUrl: './form-v2.html',
  styleUrl: './form-v2.scss',
})
export class FormV2 {
  loginModel = signal<UserSignIn>({
    username: '',
    password: '',
    recheckPassword: '',
  })

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.username, { message: 'Username is required' })
    required(schemaPath.password, { message: 'Password is required' })
    required(schemaPath.recheckPassword, { message: 'Recheck Password is required' })
    validate(schemaPath, (({ value }) => {
      if (value().password !== value().recheckPassword) {
        return {
          kind: 'password',
          message: 'Recheck password should be the same as password',
        }
      }
      return null
    }))
  })

  onSubmit() {
    console.log(this.loginForm())
    console.log(this.loginForm().invalid())
  }
}
