import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWallComponent } from './our-wall.component';

describe('OurWallComponent', () => {
  let component: OurWallComponent;
  let fixture: ComponentFixture<OurWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
