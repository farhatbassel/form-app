import { AbstractControl, ValidationErrors } from "@angular/forms";
import { UserSignInForm } from "./form.interface";

export function passwordCheck(formGroup: AbstractControl<UserSignInForm>): ValidationErrors | null {
  const pass = formGroup.value.password;
  const recheck = formGroup.value.recheckPassword;
  if (!pass || !recheck) {
    return null
  }
  if (pass !== recheck) {
    return {
      'PasswordsDoNoMatch': 'PasswordsDoNoMatch'
    }
  }
  return null
}
