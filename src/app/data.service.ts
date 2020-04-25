import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIConstants } from './apiConstants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httclient: HttpClient) { }

  getCountryStats(country, format): Observable<any> {
    let form = new FormData();
    form.append('country', country);
    form.append('format', format);
    return this.httclient.post(APIConstants.countryStats, form);
  }

  getplayerInfo(Id): Observable<any> {
    let form = new FormData();
    form.append('player_id', Id)
    return this.httclient.post(APIConstants.playerStats, form);
  }

  getSeriesData(format): Observable<any> {
    console.log(format)
    let form = new FormData();
    form.append('format', format)
    console.log(form)
    return this.httclient.post(APIConstants.seriesStats, form);
  }

  getPredictionData(Data): Observable<any> {
    console.log(Data)
    // Data={'city':'','neutralvenue':'','toss_winner':'','toss_decision':'','team_1':'','team_2':'',
    //      'batsman':'','non_striker':'','bowler':'','extras_run':'','player_out':'','remaining_ball':'','format':''}
    let form = new FormData();

    form.append('city', Data['city'])
    form.append('neutralvenue', Data['neutralvenue'])
    form.append('toss_winner', Data['toss_winner'])
    form.append('toss_decision', Data['toss_decision'])
    form.append('team_1', Data['team_1'])
    form.append('team_2', Data['team_2'])
    form.append('batsman', Data['batsman'])
    form.append('non_striker', Data['non_striker'])
    form.append('bowler', Data['bowler'])
    form.append('extras_run', Data['extras_run'])
    form.append('player_out', Data['player_out'])
    form.append('wickets', Data['wickets'])
    form.append('curr_score', Data['curr_Score'])
    form.append('remaining_ball', Data['remaining_ball'])
    form.append('format', Data['format'])

    console.log(form)

    return this.httclient.post(APIConstants.prediction, form);
  }

  getWicketPredictionData(Data): Observable<any> {
    console.log(Data)
    // Data={'city':'','neutralvenue':'','toss_winner':'','toss_decision':'','team_1':'','team_2':'',
    //      'batsman':'','non_striker':'','bowler':'','extras_run':'','player_out':'','remaining_ball':'','format':''}
    let form = new FormData();
    // 'city': '', 'neutralvenue': '', 'toss_winner': '',
    // 'toss_decision': '', 'team_1': '', 'team_2': '',
    // 'batsman': '', 'non_striker': '', 'bowler': '',
    // 'extras_run': '', 'player_out': '', //'remaining_ball': '',
    // 'format': '',  'current_score': '',
    // 'venue': '','team_bat':'','current_wicket':'',
    // 'over':'','run':'','non_striker_score':'',
    // 'total_run':'','batsman_score':'','inning_no':''
    form.append('city', Data['city'])
    form.append('venue',Data['venue'])
    form.append('run',Data['run'])
    form.append('total_run',Data['total_run'])
    form.append('batsman_score',Data['batsman_score'])
    form.append('inning_no',Data['inning_no'])
    form.append('non_striker_score',Data['non_striker_score'])
    form.append('team_bat',Data['team_bat'])
    form.append('neutralvenue', Data['neutralvenue'])
    form.append('toss_winner', Data['toss_winner'])
    form.append('toss_decision', Data['toss_decision'])
    form.append('team_1', Data['team_1'])
    form.append('team_2', Data['team_2'])
    form.append('batsman', Data['batsman'])
    form.append('non_striker', Data['non_striker'])
    form.append('bowler', Data['bowler'])
    form.append('extras_run', Data['extras_run'])
    form.append('player_out', Data['player_out'])
    form.append('current_wicket', Data['current_wicket'])
    form.append('current_score', Data['current_score'])
    form.append('over', Data['over'])
    form.append('venue',Data['venue'])
    form.append('format', Data['format'])

    console.log(form)

    return this.httclient.post(APIConstants.Wicketprediction, form);
  }

  getLatestNews(): Observable<any> {
    return this.httclient.get(APIConstants.latestNews);
  }
  getTeamRanking(gender, format): Observable<any> {
    console.log(gender, format)
    let form = new FormData();
    form.append('gender', gender);
    form.append('format', format);
    return this.httclient.post(APIConstants.teamRanking, form);
  }
  getPlayerRanking(gender, format, type): Observable<any> {
    console.log(gender, format)
    let form = new FormData();
    form.append('gender', gender);
    form.append('format', format);
    form.append('ttype', type)
    return this.httclient.post(APIConstants.playerRanking, form);
  }
  getIPLRecords(type): Observable<any> {
    console.log(type)
    let form = new FormData();
    form.append('record_type',type)
    return this.httclient.post(APIConstants.IPLRecords, form);
  }
  getUpcomingMatches():Observable<any>{
    return this.httclient.get(APIConstants.upcomingMatches);
  }
}
