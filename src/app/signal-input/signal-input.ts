import { Component, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-input',
  imports: [],
  templateUrl: './signal-input.html',
  styleUrl: './signal-input.scss',
})
export class SignalInput implements FormValueControl<string> {
  value = model<string>('')
  label = input.required<string>()
  type = input.required<string>()
}
