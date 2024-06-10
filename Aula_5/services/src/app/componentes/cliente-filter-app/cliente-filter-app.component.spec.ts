import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFilterAppComponent } from './cliente-filter-app.component';

describe('ClienteFilterAppComponent', () => {
  let component: ClienteFilterAppComponent;
  let fixture: ComponentFixture<ClienteFilterAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteFilterAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteFilterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
