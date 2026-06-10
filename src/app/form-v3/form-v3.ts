import { Component, resource, signal } from '@angular/core';
import { UserSignIn } from '../shared/form.interface';
import { debounce, form, FormField, required, validate, validateAsync } from '@angular/forms/signals';
import { Input } from '../input/input';

@Component({
  selector: 'app-form-v3',
  imports: [Input, FormField],
  templateUrl: './form-v3.html',
  styleUrl: './form-v3.scss',
})
export class FormV3 {
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
      return null;
    }))

    debounce(schemaPath.username, 500);

    validateAsync(schemaPath.username, {
      params(ctx) {
        return ctx.value();
      },
      factory: (username) => {
        return resource({
          params: username,
          loader: async ({ params: username }) => {
            const isAvailable = await this.checkUsernameAvailability(username)
            return isAvailable;
          }
        })
      },
      onSuccess: (result: boolean) => {
        if (!result) {
          return {
            kind: 'username_taken',
            message: 'This username is taken',
          }
        }
        return null;
      },
      onError(error, ctx) {
        console.error(`Async validation error ${error} for field ${ctx}`)
        return null;
      },
    })
  })

  private checkUsernameAvailability(username: string): Promise<boolean> {
    return new Promise((res) => {
      setTimeout(() => {
        const taken = ['admin', 'test', 'bassel'];
        res(!taken.includes(username.toLowerCase()));
      }, 2500);
    });
  }

  onSubmit() {
    console.log(this.loginForm())
    console.log(this.loginForm().invalid())
  }
}
