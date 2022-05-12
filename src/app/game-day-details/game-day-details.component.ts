import { Component, Input, OnInit } from '@angular/core';
import { GameDay, GameStatusEnum, GameTypeEnum } from '../game-day/game-day.component';

@Component({
  selector: 'squad-game-day-details',
  templateUrl: './game-day-details.component.html',
  styleUrls: ['./game-day-details.component.scss']
})
export class GameDayDetailsComponent implements OnInit {
  @Input() game: GameDay;

  constructor() {
    this.game=new GameDay ();
    this.game.GameCourt='Court 5';
    this.game.GameDate=new Date ();
    this.game.GameStatus=GameStatusEnum.Lost;
    this.game.GameType=GameTypeEnum.Exibition;
  }

  ngOnInit(): void {
  }

}
