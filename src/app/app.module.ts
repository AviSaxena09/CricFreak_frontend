import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StatsComponent } from './stats/stats.component';
import { PredictionComponent } from './prediction/prediction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryStatsComponent } from './stats/Options/country-stats/country-stats.component';
import { PlayerStatsComponent } from './stats/Options/player-stats/player-stats.component';
import { SeriesStatsComponent } from './stats/Options/series-stats/series-stats.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { EmbedVideo } from 'ngx-embed-video';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PlayerRankComponent } from './player-rank/player-rank.component';
import { TeamRankComponent } from './team-rank/team-rank.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { IPLRecordsComponent } from './ipl-records/ipl-records.component';
import { GaugeChartModule } from 'angular-gauge-chart'
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LiveComponent } from './live/live.component';
import { WicketPredictionComponent } from './wicket-prediction/wicket-prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StatsComponent,
    PredictionComponent,
    DashboardComponent,
    HomepageHeaderComponent,
    DashboardHeaderComponent,
    CountryStatsComponent,
    PlayerStatsComponent,
    SeriesStatsComponent,
    LatestNewsComponent,
    PlayerRankComponent,
    TeamRankComponent,
    UpcomingMatchesComponent,
    IPLRecordsComponent,
    LiveComponent,
    WicketPredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule.forRoot(),
    EmbedVideo.forRoot(),
    GaugeChartModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
