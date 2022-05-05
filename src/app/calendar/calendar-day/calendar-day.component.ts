import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {
  @Input() Notes = "";
  @Input() Game: GameDay = new GameDay();

  get TimeAndCourt(): string {
    return `${this.Game.GameTime} pm on Court ${this.Game.GameCourt}`
  }

  get HaveGame(): string {
    return this.Game.GameType === GameTypeEnum.None
      ? 'No Game'
      : 'Game';
  }

  get Day(): string {
    return this.Game.GameDate.toLocaleString(
      'default', {weekday: 'long'}
      );
  }

  constructor() { }

  ngOnInit(): void {
  }

}

export enum GameTypeEnum {
  None,
  Regular,
  Playoff,
  Exibition
}

export class GameDay {
  GameType = GameTypeEnum.None;
  GameDate = new Date();
  GameTime = "7:30";
  GameCourt = 1;
}
