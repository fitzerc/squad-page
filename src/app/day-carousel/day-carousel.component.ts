import { Component, Input, OnInit } from '@angular/core';
import { GameDay, GameStatusEnum, GameTypeEnum } from '../game-day/game-day.component';

@Component({
  selector: 'squad-day-carousel',
  templateUrl: './day-carousel.component.html',
  styleUrls: ['./day-carousel.component.scss']
})
export class DayCarouselComponent implements OnInit {
  @Input() games: GameDay[] = [];

  constructor() {}

  ngOnInit(): void {
  }

}
