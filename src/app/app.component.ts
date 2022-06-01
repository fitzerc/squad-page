import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameDay } from './game-day/game-day.component';
import { GameDayDetails, GameDayInfo } from './models/gameday-info.model';
import { SquadInfo } from './models/squad-info.model';
import { BaseGameDayService } from './services/game-day.service';
import { BaseSquadService } from './services/squad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  squadNumber = 12;
  squad: SquadInfo = null;
  gameDaysAsync!: Observable<GameDayDetails[]>;
  squadNameAsync!: Observable<SquadInfo>;

  clickedGameDay: GameDayDetails = null;
  clickedGameOpponentSquad: SquadInfo = null;

  private subscriptions: Subscription[] = [];

  constructor(private readonly squadService: BaseSquadService, private readonly gameDayService: BaseGameDayService){}

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe);
  }

  ngOnInit(): void {
    this.squadNameAsync = this.squadService.getSquadName(this.squadNumber);

    this.subscriptions.push(
      this.squadNameAsync.subscribe(squadInfo => {
        this.squad = squadInfo
        this.gameDaysAsync = this.gameDayService.getGameDays(this.squad.id);
      }));
  }

  gameDayClicked(gameDay: GameDayDetails): void {
    this.clickedGameOpponentSquad = null;
    this.clickedGameDay = gameDay;

    if (gameDay.gameType == 'Bye') {
      return;
    }

    let oppId = this.squad.id == gameDay.homeSquadId
      ? gameDay.awaySquadId
      : gameDay.homeSquadId;

    this.subscriptions.push(
      this.squadService.getSquadById(oppId)
      .subscribe(res => this.clickedGameOpponentSquad = res)
    );
  }

  checkinClicked(): void {
    console.log('checkin clicked');
  }
}
