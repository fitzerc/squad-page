import { Component, Input, OnInit } from '@angular/core';
import { GameDay, GameStatusEnum, GameTypeEnum } from '../game-day/game-day.component';

@Component({
  selector: 'squad-game-day-check-in',
  templateUrl: './game-day-check-in.component.html',
  styleUrls: ['./game-day-check-in.component.scss']
})
export class GameDayCheckInComponent implements OnInit {
  @Input() Notes: "Testing your eyes";
  @Input() Game: GameDay;

  get byeGameTypeString (): string {
    return GameDay.byeGameTypeString;
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
