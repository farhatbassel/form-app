import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormV5 } from './form-v5';

describe('FormV5', () => {
  let component: FormV5;
  let fixture: ComponentFixture<FormV5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormV5],
    }).compileComponents();

    fixture = TestBed.createComponent(FormV5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
