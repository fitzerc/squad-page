import { Component, Input, OnInit } from '@angular/core';
import { GameDay, GameStatusEnum, GameTypeEnum } from '../game-day/game-day.component';

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

    let dt = new Date(2022, 4, 18, 20, 5);
    tmpList.push(this.getGame('Court 5', dt, GameTypeEnum.Regular, GameStatusEnum.Upcoming));

    dt = new Date(2022, 4, 25, 19, 15);
    tmpList.push(this.getGame('Court 5', dt, GameTypeEnum.Regular, GameStatusEnum.Upcoming));

    dt = new Date(2022, 5, 1, 20, 65);
    tmpList.push(this.getGame('Court 2', dt, GameTypeEnum.Regular, GameStatusEnum.Upcoming));

    dt = new Date(2022, 5, 8);
    tmpList.push(this.getGame('0', dt, GameTypeEnum.Bye, GameStatusEnum.Upcoming));

    dt = new Date(2022, 5, 15, 18, 25);
    tmpList.push(this.getGame('Court 3', dt, GameTypeEnum.Regular, GameStatusEnum.Upcoming));

    dt = new Date(2022, 5, 22, 18, 25);
    tmpList.push(this.getGame('Court 4', dt, GameTypeEnum.Regular, GameStatusEnum.Upcoming));

    dt = new Date(2022, 5, 29, 20, 5);
    tmpList.push(this.getGame('Court 1', dt, GameTypeEnum.Regular, GameStatusEnum.Upcoming));

    dt = new Date(2022, 6, 6, 20, 55);
    tmpList.push(this.getGame('Court 3', dt, GameTypeEnum.Regular, GameStatusEnum.Upcoming));

    dt = new Date(2022, 6, 13, 19, 15);
    tmpList.push(this.getGame('Court 4', dt, GameTypeEnum.Regular, GameStatusEnum.Upcoming));

    dt = new Date(2022, 6, 20, 20, 5);
    tmpList.push(this.getGame('Court 2', dt, GameTypeEnum.Regular, GameStatusEnum.Upcoming));

    dt = new Date(2022, 6, 27, 20, 55);
    tmpList.push(this.getGame('Court 5', dt, GameTypeEnum.Regular, GameStatusEnum.Upcoming));

    dt = new Date(2022, 7, 3, 19, 15);
    tmpList.push(this.getGame('Court 5', dt, GameTypeEnum.Regular, GameStatusEnum.Upcoming));

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
