import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediridComponent } from './pedirid.component';

describe('PediridComponent', () => {
  let component: PediridComponent;
  let fixture: ComponentFixture<PediridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PediridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PediridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
