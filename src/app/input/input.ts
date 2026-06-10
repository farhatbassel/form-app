import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.html',
  styleUrl: './input.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Input),
    multi: true,
  }],
})
export class Input<T> implements ControlValueAccessor {
  private onChange: (value: T) => void = () => { };
  onTouched: () => void = () => { };
  value = signal<T | undefined>(undefined);

  public label = input.required<string>();
  public type = input.required<string>();

  writeValue(obj: T): void {
    this.value.set(obj);
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  onInput(event: Event) {
    const v = (event.target as HTMLInputElement).value as T;
    this.value.set(v);
    this.onChange(v)
  }
}

