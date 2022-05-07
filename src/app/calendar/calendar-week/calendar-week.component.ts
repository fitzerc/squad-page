import { Component, OnInit } from '@angular/core';
import { GameDay, GameStatusEnum, GameTypeEnum } from '../calendar-day/calendar-day.component';

@Component({
  selector: 'app-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.scss']
})
export class CalendarWeekComponent implements OnInit {

  game = new GameDay();

  constructor() {
    this.game.GameCourt = 5;
    this.game.GameDate = new Date('1/1/2022');
    this.game.GameType = GameTypeEnum.None;
    this.game.GameStatus = GameStatusEnum.Upcoming;
  }

  ngOnInit(): void {
  }

}
