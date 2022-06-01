import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameDay, GameStatusEnum, GameTypeEnum } from '../game-day/game-day.component';
import { GameDayDetails } from '../models/gameday-info.model';
import { SquadInfo } from '../models/squad-info.model';

@Component({
  selector: 'squad-game-day-details',
  templateUrl: './game-day-details.component.html',
  styleUrls: ['./game-day-details.component.scss']
})
export class GameDayDetailsComponent implements OnInit {
  @Input() Game: GameDayDetails;
  @Input() OpponentSquad: SquadInfo;
  @Output() CheckInClick=new EventEmitter<GameDayDetails> ();

  get byeGameTypeString (): string {
    return GameDay.byeGameTypeString;
  }

  get resultString(): string {
    if (this.Game.gameStatus == 'Upcoming') {
      return 'Upcoming';
    }

    return this.Game.result.result == this.Game.result.winString
      ? 'Win'
      : 'Loss';
  } 

  get GameTime(): string {
    return `${this.gameDateAsDate.toLocaleTimeString(
      'default', { timeStyle: 'short', timeZone: "America/Chicago" }
    )}`
  }

  get gameDateAsDate(): Date {
    let dateAsString = this.Game.gameDate.toString();
    return new Date(dateAsString.substring(0, dateAsString.length - 1));
  }

  get Opponent(): string{
    if (this.Game.gameType == 'Bye') {
      this.OpponentSquad = {
        id: '0',
        name: 'Bye',
        number: 0,
        record: null
      };

      return 'Bye';
    }

    return this.OpponentSquad?.name;
  }

  constructor() {}

  ngOnInit(): void {
  }

  CheckInClicked (): void{
    this.CheckInClick.emit(this.Game);
  }

}
