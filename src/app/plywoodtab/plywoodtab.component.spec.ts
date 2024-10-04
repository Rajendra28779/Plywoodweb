import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlywoodtabComponent } from './plywoodtab.component';

describe('PlywoodtabComponent', () => {
  let component: PlywoodtabComponent;
  let fixture: ComponentFixture<PlywoodtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlywoodtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlywoodtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
