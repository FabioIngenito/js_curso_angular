import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossasUnidadesComponent } from './nossas-unidades.component';

describe('NossasUnidadesComponent', () => {
  let component: NossasUnidadesComponent;
  let fixture: ComponentFixture<NossasUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NossasUnidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NossasUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
