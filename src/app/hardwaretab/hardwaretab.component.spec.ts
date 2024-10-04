import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwaretabComponent } from './hardwaretab.component';

describe('HardwaretabComponent', () => {
  let component: HardwaretabComponent;
  let fixture: ComponentFixture<HardwaretabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwaretabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwaretabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
