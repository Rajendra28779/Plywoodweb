import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StelltabComponent } from './stelltab.component';

describe('StelltabComponent', () => {
  let component: StelltabComponent;
  let fixture: ComponentFixture<StelltabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StelltabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StelltabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
