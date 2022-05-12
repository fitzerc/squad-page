import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  gameDaysAsync!: Observable<GameDay[]>;
  squadNameAsync!: Observable<SquadInfo>;

  constructor(private readonly squadService: BaseSquadService, private readonly gameDayService: BaseGameDayService){}

  ngOnInit(): void {
    this.gameDaysAsync = this.gameDayService.getGameDays();
    this.squadNameAsync = this.squadService.getSquadName();
  }
  squadName = 'Setsaholics Anonymous';
}
