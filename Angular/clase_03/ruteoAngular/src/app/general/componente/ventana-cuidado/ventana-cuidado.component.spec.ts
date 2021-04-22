import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCuidadoComponent } from './ventana-cuidado.component';

describe('VentanaCuidadoComponent', () => {
  let component: VentanaCuidadoComponent;
  let fixture: ComponentFixture<VentanaCuidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCuidadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCuidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
