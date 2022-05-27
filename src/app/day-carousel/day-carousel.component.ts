import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameDay, GameStatusEnum, GameTypeEnum } from '../game-day/game-day.component';

@Component({
  selector: 'squad-day-carousel',
  templateUrl: './day-carousel.component.html',
  styleUrls: ['./day-carousel.component.scss']
})
export class DayCarouselComponent implements OnInit {
  @Input() games: GameDay[] = [];
  @Output() Click = new EventEmitter<GameDay>();

  constructor() {}

  ngOnInit(): void {
  }

  CardClicked(gameDay: GameDay): void {
    this.Click.emit(gameDay);
  }
}
