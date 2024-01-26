import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCalculosComponent } from './lista-calculos.component';

describe('ListaCalculosComponent', () => {
  let component: ListaCalculosComponent;
  let fixture: ComponentFixture<ListaCalculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCalculosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
