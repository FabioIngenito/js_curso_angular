import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosLivresComponent } from './cursos-livres.component';

describe('CursosLivresComponent', () => {
  let component: CursosLivresComponent;
  let fixture: ComponentFixture<CursosLivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosLivresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
