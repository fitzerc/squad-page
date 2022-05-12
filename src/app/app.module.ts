import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DayCarouselComponent } from './day-carousel/day-carousel.component';
import { GameDayComponent } from './game-day/game-day.component'
import { MockGameDayService, BaseGameDayService } from './services/game-day.service';
import { MockSquadService, BaseSquadService } from './services/squad.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DayCarouselComponent,
    GameDayComponent
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
  ],
  providers: [
    HttpClient,
    {provide: BaseGameDayService, useClass: MockGameDayService },
    { provide: BaseSquadService, useClass: MockSquadService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
