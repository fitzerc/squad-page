import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'squad-game-day',
  templateUrl: './game-day.component.html',
  styleUrls: ['./game-day.component.scss']
})
export class GameDayComponent implements OnInit {
  @Input() Notes = "This is a test note";
  @Input() Game: GameDay = new GameDay();

  byeGameTypeString = 'Bye';

  get TimeAndCourt(): string {
    return `${this.Game.FormattedTime} on Court ${this.Game.GameCourt}`
  }

  get Day(): string {
    return this.Game.GameDate.toLocaleString(
      'default', {weekday: 'short'}
      );
  }

  get gamePlayed(): boolean {
    return this.Game.GameDate < new Date();
  }

  get gameWon(): boolean {
    //Update GameDay once game is played
    //Either from database or hardcoded in carousel
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

export enum GameTypeEnum {
  None = 'None',
  Regular = 'Regular',
  Playoff = 'Playoff',
  Exibition = 'Exibition',
  Event = 'Event',
  Bye = 'Bye'
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
    return minutes > 9
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
