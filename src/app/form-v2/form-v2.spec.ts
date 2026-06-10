import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormV2 } from './form-v2';

describe('FormV2', () => {
  let component: FormV2;
  let fixture: ComponentFixture<FormV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormV2],
    }).compileComponents();

    fixture = TestBed.createComponent(FormV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
