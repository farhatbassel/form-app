import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormV3 } from './form-v3';

describe('FormV3', () => {
  let component: FormV3;
  let fixture: ComponentFixture<FormV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormV3],
    }).compileComponents();

    fixture = TestBed.createComponent(FormV3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
