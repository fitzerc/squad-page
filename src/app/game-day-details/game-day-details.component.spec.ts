import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDayDetailsComponent } from './game-day-details.component';

describe('GameDayDetailsComponent', () => {
  let component: GameDayDetailsComponent;
  let fixture: ComponentFixture<GameDayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
