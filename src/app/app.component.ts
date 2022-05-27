import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameDay } from './game-day/game-day.component';
import { SquadInfo } from './models/squad-info.model';
import { BaseGameDayService } from './services/game-day.service';
import { BaseSquadService } from './services/squad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  squadNumber = 12;
  squad: SquadInfo = null;
  gameDaysAsync!: Observable<GameDay[]>;
  squadNameAsync!: Observable<SquadInfo>;

  clickedGameDay: GameDay = null;

  private subscriptions: Subscription[] = [];

  constructor(private readonly squadService: BaseSquadService, private readonly gameDayService: BaseGameDayService){}

  ngOnInit(): void {
    this.gameDaysAsync = this.gameDayService.getGameDays();
    this.squadNameAsync = this.squadService.getSquadName(this.squadNumber);

    this.subscriptions.push(
      this.squadNameAsync.subscribe(squadInfo => this.squad = squadInfo));
  }

  gameDayClicked(gameDay: GameDay): void {
    this.clickedGameDay = gameDay;
    console.log(this.clickedGameDay);
  }

  checkinClicked(): void {
    console.log('checkin clicked');
  }
}
