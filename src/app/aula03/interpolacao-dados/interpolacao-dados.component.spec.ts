import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolacaoDadosComponent } from './interpolacao-dados.component';

describe('InterpolacaoDadosComponent', () => {
  let component: InterpolacaoDadosComponent;
  let fixture: ComponentFixture<InterpolacaoDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolacaoDadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpolacaoDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
