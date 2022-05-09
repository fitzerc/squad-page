import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {
  @Input() Notes = "This is a test note";
  @Input() Game: GameDay = new GameDay();

  get TimeAndCourt(): string {
    return `${this.Game.FormattedTime} on Court ${this.Game.GameCourt}`
  }

  get HaveGame(): string {
    return this.Game.GameType === GameTypeEnum.None
      ? 'No Game'
      : 'Game';
  }

  get Day(): string {
    return this.Game.GameDate.toLocaleString(
      'default', {weekday: 'short'}
      );
  }

  get gamePlayed(): boolean {
    return true;
  }

  get gameWon(): boolean {
    return true;
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

export enum GameStatusEnum {
  Upcoming,
  Won,
  Lost,
  Cancelled,
  NA,
}

export class GameDay {
  GameType = GameTypeEnum.None;
  GameStatus = GameStatusEnum.NA;
  GameDate = new Date();
  GameCourt = '1';

  get Played(): boolean {
    return this.GameDate < new Date()
  }

  get FormattedTime(): string {
    return this.getFormattedTime(this.GameDate)
  }

  private getFormattedTime(date: Date): string {
    const minutes = this.formatMinutes(date.getMinutes());
    const hours = this.formatHours(date.getHours());
    const amPm = date.getHours() > 12
      ? 'pm'
      : 'am';

    return `${hours}:${minutes} ${amPm}`
  }

  private formatMinutes(minutes: number): string {
    return minutes > 0
      ? minutes.toString()
      : '0' + minutes.toString();
  }

  private formatHours(hours: number): string {
    if (hours < 1) {
      return '12'
    }

    if (hours > 12) {
      return (hours - 12).toString();
    }

    return hours.toString();
  }
}
