import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDayCheckInComponent } from './game-day-check-in.component';

describe('GameDayCheckInComponent', () => {
  let component: GameDayCheckInComponent;
  let fixture: ComponentFixture<GameDayCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDayCheckInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDayCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
