import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameDayDetails, GameDayInfo } from '../models/gameday-info.model';
import { SquadInfo } from '../models/squad-info.model';

@Component({
  selector: 'squad-game-day',
  templateUrl: './game-day.component.html',
  styleUrls: ['./game-day.component.scss']
})
export class GameDayComponent implements OnInit {
  @Input() Notes = "This is a test note";
  @Input() Game: GameDayDetails = new GameDayDetails();
  @Output() Click = new EventEmitter<GameDayDetails>();

  get byeGameTypeString (): string {
    return GameDay.byeGameTypeString;
  }

  get GameTime(): string {
    return `${this.gameDateAsDate.toLocaleTimeString(
      'default', { timeStyle: 'short', timeZone: "America/Chicago" }
    )}`
  }

  get Day(): string {
    return this.gameDateAsDate.toLocaleString(
      'default', {weekday: 'short'}
      );
  }

  get shortDate(): string {
    return this.gameDateAsDate.toLocaleDateString(
      'default', {dateStyle: 'short'}
    );
  }

  get gamePlayed(): boolean {
    return this.gameDateAsDate < new Date();
  }

  get gameWon(): boolean {
    return this.Game.result.result == this.Game.result.winString;
  }

  get gameDateAsDate(): Date {
    let dateAsString = this.Game.gameDate.toString();
    return new Date(dateAsString.substring(0, dateAsString.length - 1));
  }

  constructor() { }

  ngOnInit(): void {
  }

  cardClicked(): void {
    this.Click.emit(this.Game)
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

  static byeGameTypeString = 'Bye';

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
