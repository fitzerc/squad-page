import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCarouselComponent } from './day-carousel.component';

describe('CalendarWeekComponent', () => {
  let component: DayCarouselComponent;
  let fixture: ComponentFixture<DayCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
