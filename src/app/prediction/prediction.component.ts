import { Component, OnInit } from '@angular/core';
import { globalConstants } from '../stats/Options/country-stats/globalConstant';
import { DataService } from '../data.service';
@Component({
  selector: 'prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {
  cityList: any;
  selectedCity: any;
  format: any = "ODI";
  responseFailed: any = false;
  formatData: any;
  tossWinner: any;
  tossWinnerSelect: any;
  neutralVenueList: any;
  selectedneutralVenueList: any;
  tossDescisionList: any;
  tossDescisionSelect: any;
  team1: any;
  team1List: any;
  team2: any;
  team2List: any;
  extraRun: any;
  selectedBatsman: any;
  batsmanList: any;
  bowlerSelect: any;
  bowlerList:any;
  playerOut: any;
  wicketSelect: any;
  wicketList: any;
  currentScore: any;
  remBall: any;
  NSselect: any;
  result: any;
  range:any;
  //countryData contains all the table data inside an object
  countryData: any = { 'country': '', 'keys': '', 'Data': '' };
  Data: any = {
    'city': '', 'neutralvenue': '', 'toss_winner': '',
    'toss_decision': '', 'team_1': '', 'team_2': '',
    'batsman': '', 'non_striker': '', 'bowler': '',
    'extras_run': '', 'player_out': '', 'remaining_ball': '',
    'format': '', 'wickets': '', 'curr_Score': ''
  }
section:any='pred';
  setSection(value){
    this.section=value;
  }


  // public canvasWidth = 300
  // public needleValue = 50 // 83 , 15
  // public centralLabel = '2'
  // // public bottomLabel = '65'
  // public options = {
  //   hasNeedle: true,
  //   needleColor: 'rgb(14, 37, 66)',
  //   needleUpdateSpeed: 1000,
  //   arcColors: ['green', 'yellow', 'red'],
  //   arcDelimiters: [30, 70],
  //   //rangeLabel: ['1','3'],
  //   needleStartValue: 50,
  // }

  chartGuage() {

    
  }

  ngOnDestroy() {
  }
  constructor(private DataService: DataService) { }

  //For DropDown Function
  //Get country datalist
  getCountryList() {
    this.cityList = globalConstants.city;
    this.formatData = globalConstants.formatData;
    this.tossWinner = globalConstants.toss_winner;
    this.neutralVenueList = globalConstants.neutralvenue;
    this.tossDescisionList = globalConstants.toss_decision;
    this.team1List = globalConstants.team_1;
    this.team2List = globalConstants.team_2;
    this.wicketList = globalConstants.wickets;
  }
  //Get selected country from dropdown
  getCityData() {
    this.Data['city'] = this.selectedCity;
    // this.ODI();
  }
  //Set Format
  setFormat(value) {
    this.format=value;
    this.Data['format'] = value;
  }
  //set tossWinner
  settossWinner() {
    this.Data['toss_winner'] = this.tossWinnerSelect;
  }
  //set neutralvalue
  setneutralVenueListData() {
    this.Data['neutralvenue'] = this.selectedneutralVenueList;
  }
  //set toss descision
  setTossDescisionData() {
    this.Data['toss_decision'] = this.tossDescisionSelect;
  }
  //set team 1
  setTeam1() {
    this.Data['team_1'] = this.team1;
    this.batsmanList = globalConstants.batsman[this.team1];
    this.bowlerList = globalConstants.bowler[this.team1];
    console.log(globalConstants.batsman[this.team1])
    console.log(globalConstants.batsman[this.team2])
    if (this.team2 != undefined) {
      this.batsmanList = []
      this.bowlerList = []
      this.batsmanList = globalConstants.batsman[this.team1].concat(globalConstants.batsman[this.team2]);
      this.bowlerList = globalConstants.bowler[this.team1].concat(globalConstants.bowler[this.team2]);

    }
    else {
      this.batsmanList = globalConstants.batsman[this.team1]
      this.bowlerList = globalConstants.bowler[this.team1]
    }
  }
  //set team 2
  setTeam2() {
    this.Data['team_2'] = this.team2;
    if (this.team1 != undefined) {
      this.batsmanList = []
      this.bowlerList=[]
      if (this.team1 != undefined) {
        this.batsmanList = []
        this.bowlerList=[]
        this.batsmanList = globalConstants.batsman[this.team1].concat(globalConstants.batsman[this.team2]);
        this.bowlerList = globalConstants.bowler[this.team1].concat(globalConstants.bowler[this.team2])
      }
      else {
        this.batsmanList = globalConstants.batsman[this.team2]
        this.bowlerList=globalConstants.bowler[this.team2]
      }
    }
    console.log(this.batsmanList.length)

  }
  //set batsman
  setBatsman() {
    console.log(this.selectedBatsman)
    console.log('entered batsman')
    this.Data['batsman'] = this.selectedBatsman;
  }
  //set bowler
  setBowler() {
    this.Data['bowler'] = this.bowlerSelect;
  }
  setNS() {
    console.log(this.NSselect)
    this.Data['non_striker'] = this.NSselect;
  }
  //for ODI format table and API call
  Predict() {
    console.log(this.Data)
    this.DataService.getPredictionData(this.Data).subscribe(response => {
      //Flag for server failure
      console.log(response)
      this.responseFailed = false;
      this.result = response.score;
      this.range=response.range;
      if(this.range[0]!=undefined)
      {this.chartGuage();}
      console.log(response)
    }, err => {
      //If server fails to respond
      this.responseFailed = true;
    });
    
  }
  setExtraRun() {
    this.Data['extras_run'] = this.extraRun
  }
  setPlayerOut() {
    this.Data['player_out'] = this.playerOut;
  }
  setWicket() {
    this.Data['wickets'] = this.wicketSelect;
  }
  setcurrentScore() {
    this.Data['curr_Score'] = this.currentScore;
  }
  setRemBall() {
    this.Data['remaining_ball'] = this.remBall;
  }
  ngOnInit() {
    //To get country data list on page load
    this.Data['format'] = this.format;
    this.getCountryList();
  }

}
