import { Component, signal } from '@angular/core';
import { Input } from '../input/input';
import { UserSignIn } from '../shared/form.interface';
import { form, FormField, hidden, required, schema, validate } from '@angular/forms/signals';

@Component({
  selector: 'app-form-v4',
  imports: [Input, FormField],
  templateUrl: './form-v4.html',
  styleUrl: './form-v4.scss',
})
export class FormV4 {
  loginModel = signal<UserSignIn>({
    username: '',
    password: '',
    recheckPassword: '',
  })

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.username, { message: 'Username is required' })
    hidden(schemaPath.password, { when: ({ valueOf }) => valueOf(schemaPath.username) === '' })
    hidden(schemaPath.recheckPassword, { when: ({ valueOf }) => valueOf(schemaPath.password) === '' || valueOf(schemaPath.username) === '' })
    required(schemaPath.password, { message: 'Password is required' })
    required(schemaPath.recheckPassword, { message: 'Recheck Password is required' })
    validate(schemaPath, (({ value }) => {
      if (value().password !== value().recheckPassword) {
        return {
          kind: 'password',
          message: 'Passwords not matching',
        }
      }
      return null;
    }))
  })

  onSubmit() {
    console.log(this.loginForm())
    console.log(this.loginForm().invalid())
  }
}
