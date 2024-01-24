import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectReacaoComponent } from './select-reacao.component';

describe('SelectReacaoComponent', () => {
  let component: SelectReacaoComponent;
  let fixture: ComponentFixture<SelectReacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectReacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectReacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
