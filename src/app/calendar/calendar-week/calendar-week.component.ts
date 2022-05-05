import { Component, OnInit } from '@angular/core';
import { GameDay, GameTypeEnum } from '../calendar-day/calendar-day.component';

@Component({
  selector: 'app-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.scss']
})
export class CalendarWeekComponent implements OnInit {
  game: GameDay={
    GameCourt: 5,
    GameDate: new Date('1/1/2022'),
    GameTime: '8:00',
    GameType: GameTypeEnum.None
  };
  constructor() { }

  ngOnInit(): void {
  }

}
