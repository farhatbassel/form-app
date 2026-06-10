import { FormControl } from "@angular/forms";

export type UserSignIn = {
  username: string;
  password: string;
  recheckPassword: string;
}

export type UserSignInForm = {
  [k in keyof UserSignIn]: FormControl<UserSignIn[k]>;
}

