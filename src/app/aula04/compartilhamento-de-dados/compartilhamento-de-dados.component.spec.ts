import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilhamentoDeDadosComponent } from './compartilhamento-de-dados.component';

describe('CompartilhamentoDeDadosComponent', () => {
  let component: CompartilhamentoDeDadosComponent;
  let fixture: ComponentFixture<CompartilhamentoDeDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompartilhamentoDeDadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompartilhamentoDeDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
