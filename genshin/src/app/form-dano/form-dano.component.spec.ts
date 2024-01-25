import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDanoComponent } from './form-dano.component';

describe('FormDanoComponent', () => {
  let component: FormDanoComponent;
  let fixture: ComponentFixture<FormDanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDanoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
