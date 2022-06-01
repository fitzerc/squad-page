import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameDay, GameStatusEnum, GameTypeEnum } from '../game-day/game-day.component';
import { GameDayDetails, GameDayInfo } from '../models/gameday-info.model';
import { SquadInfo } from '../models/squad-info.model';

@Component({
  selector: 'squad-day-carousel',
  templateUrl: './day-carousel.component.html',
  styleUrls: ['./day-carousel.component.scss']
})
export class DayCarouselComponent implements OnInit {
  @Input() games: GameDayDetails[] = [];
  @Output() Click = new EventEmitter<GameDayDetails>();

  constructor() {}

  ngOnInit(): void {
  }

  CardClicked(gameDay: GameDayDetails): void {
    this.Click.emit(gameDay);
  }
}
