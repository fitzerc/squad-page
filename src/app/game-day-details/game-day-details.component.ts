import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameDay, GameStatusEnum, GameTypeEnum } from '../game-day/game-day.component';

@Component({
  selector: 'squad-game-day-details',
  templateUrl: './game-day-details.component.html',
  styleUrls: ['./game-day-details.component.scss']
})
export class GameDayDetailsComponent implements OnInit {
  @Input() Game: GameDay;
  @Output() CheckInClick=new EventEmitter<GameDay> ();

  get byeGameTypeString (): string {
    return GameDay.byeGameTypeString;
  }

  Opponent: string='Greatest Showman';

  constructor() {
    this.Game=new GameDay ();
    this.Game.GameCourt='Court 5';
    this.Game.GameDate=new Date ();
    this.Game.GameStatus=GameStatusEnum.Lost;
    this.Game.GameType=GameTypeEnum.Exibition;
  }

  ngOnInit(): void {
  }

  CheckInClicked (): void{
    this.CheckInClick.emit(this.Game);
  }

}
