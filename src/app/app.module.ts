import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DayCarouselComponent } from './day-carousel/day-carousel.component';
import { GameDayComponent } from './game-day/game-day.component'
import { GameDayDetailsComponent } from './game-day-details/game-day-details.component';
import { MockGameDayService, BaseGameDayService } from './services/game-day.service';
import { MockSquadService, BaseSquadService } from './services/squad.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GameDayCheckInComponent } from './game-day-check-in/game-day-check-in.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DayCarouselComponent,
    GameDayComponent,
    GameDayDetailsComponent,
    GameDayCheckInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatSidenavModule,
  ],
  providers: [
    HttpClient,
    {provide: BaseGameDayService, useClass: MockGameDayService },
    { provide: BaseSquadService, useClass: MockSquadService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
