import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAjudaComponent } from './botao-ajuda.component';

describe('BotaoAjudaComponent', () => {
  let component: BotaoAjudaComponent;
  let fixture: ComponentFixture<BotaoAjudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoAjudaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoAjudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
