import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormV4 } from './form-v4';

describe('FormV4', () => {
  let component: FormV4;
  let fixture: ComponentFixture<FormV4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormV4],
    }).compileComponents();

    fixture = TestBed.createComponent(FormV4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
