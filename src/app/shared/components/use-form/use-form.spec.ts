import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseForm } from './use-form';

describe('UseForm', () => {
  let component: UseForm;
  let fixture: ComponentFixture<UseForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
