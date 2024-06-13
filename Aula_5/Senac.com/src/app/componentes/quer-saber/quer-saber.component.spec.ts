import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerSaberComponent } from './quer-saber.component';

describe('QuerSaberComponent', () => {
  let component: QuerSaberComponent;
  let fixture: ComponentFixture<QuerSaberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuerSaberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuerSaberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
