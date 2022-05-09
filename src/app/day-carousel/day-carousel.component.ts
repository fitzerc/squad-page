import { Component, Input, OnInit } from '@angular/core';
import { GameDay, GameStatusEnum, GameTypeEnum } from '../calendar-day/calendar-day.component';

@Component({
  selector: 'squad-day-carousel',
  templateUrl: './day-carousel.component.html',
  styleUrls: ['./day-carousel.component.scss']
})
export class DayCarouselComponent implements OnInit {
  @Input() games: GameDay[] = [];

  constructor() {
    let i = 1;
    let tmpList = [];

    while (i < 8) {
      tmpList.push(this.getGame(i.toString(), new Date(new Date().getDate() + i), GameTypeEnum.Regular, GameStatusEnum.Upcoming))
      i++;
    }

    this.games = tmpList;
  }

  private getGame(court: string, date: Date, type: GameTypeEnum, gameStatus: GameStatusEnum): GameDay {
    const gameDay = new GameDay();

    gameDay.GameCourt = court;
    gameDay.GameDate = date;
    gameDay.GameType = type;
    gameDay.GameStatus = gameStatus;

    return gameDay;
  }

  ngOnInit(): void {
  }

}
