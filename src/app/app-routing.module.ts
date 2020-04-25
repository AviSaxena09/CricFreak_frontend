import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { StatsComponent } from './stats/stats.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PredictionComponent } from './prediction/prediction.component';
import { CountryStatsComponent } from './stats/Options/country-stats/country-stats.component';
import { SeriesStatsComponent } from './stats/Options/series-stats/series-stats.component';
import { PlayerStatsComponent } from './stats/Options/player-stats/player-stats.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { TeamRankComponent } from './team-rank/team-rank.component';
import { PlayerRankComponent } from './player-rank/player-rank.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { IPLRecordsComponent } from './ipl-records/ipl-records.component';
import { LiveComponent } from './live/live.component';

const routes: Routes = [
//   {
//   path: '', 
//   redirectTo: 'homePage', 
//   pathMatch: 'full',
//   component:HomePageComponent
//  },
  {
    path:'homepage',
    component:HomePageComponent
  }
  ,
  {
    path:'dashBoard',
    component:DashboardComponent,
    children:[
      {
        path:'prediction',
        component:PredictionComponent
      }
      ,
      {
        path:'latest-news',
        component:LatestNewsComponent
      }
      ,
      {
        path:'upcoming-matches',
        component:UpcomingMatchesComponent
      }
      ,
      {
        path:'live',
        component:LiveComponent
      }
      ,
      {
        path:'ipl-records',
        component:IPLRecordsComponent
      }
      ,
      {
        path:'team-rank',
        component:TeamRankComponent
      }
      ,
      {
        path:'player-rank',
        component:PlayerRankComponent
      }
      ,
      {
        path:'stats',
        //component:StatsComponent,
        children:[
          {
            path:'country-stat',
            component:CountryStatsComponent
          }
          ,
          {
            path:'series-stat',
            component:SeriesStatsComponent
          }
          ,
          {
            path:'player-stat',
            component:PlayerStatsComponent
          }
        ]
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
