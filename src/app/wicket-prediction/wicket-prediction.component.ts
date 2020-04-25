import { Component, OnInit } from '@angular/core';
import { globalConstants } from '../stats/Options/country-stats/globalConstant';
import { DataService } from '../data.service';
import * as Chart from '../../../node_modules/chart.js';
//import * as ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'wicket-prediction',
  templateUrl: './wicket-prediction.component.html',
  styleUrls: ['./wicket-prediction.component.css']
})
export class WicketPredictionComponent implements OnInit {
  cityList: any;
  selectedCity: any;
  format: any = 'ODI';
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
  bowlerList: any;
  playerOut: any;
  wicketSelect: any;
  wicketList: any;
  currentScore: any;
  remBall: any;
  NSselect: any;
  result: any;
  range: any;
  globalData: any;
  //countryData contains all the table data inside an object
  countryData: any = { 'country': '', 'keys': '', 'Data': '' };
  Data: any = {
    'city': '', 'neutralvenue': '', 'toss_winner': '',
    'toss_decision': '', 'team_1': '', 'team_2': '',
    'batsman': '', 'non_striker': '', 'bowler': '',
    'extras_run': '', 'player_out': '', //'remaining_ball': '',
    'format': '', 'current_score': '',
    'venue': '', 'team_bat': '', 'current_wicket': '',
    'over': '', 'run': '', 'non_striker_score': '',
    'total_run': '', 'batsman_score': '', 'inning_no': ''
  }
  section: any = 'pred';
  Over: any;
  run: any;
  totalRun: any;
  batsmanScore: any;
  nsScore: any;
  setSection(value) {
    this.section = value;
  }
  setOver() {
    this.Data['over'] = this.Over
  }
  setRun() {
    this.Data['run'] = this.run
  }
  setTotalRun() {
    this.Data['total_run'] = this.totalRun
  }
  setBatsmanScore() {
    this.Data['batsman_score'] = this.batsmanScore
  }
  setNsScore() {
    this.Data['non_striker_score'] = this.nsScore
  }
  public canvasWidth =500
  public needleValue=15
  public centralLabel=''
  // public bottomLabel = '65'
  public options={
    hasNeedle: true,
    needleColor: 'rgb(14, 37, 66)',
    needleUpdateSpeed: 1000,
    arcColors: ['grey', 'lightorange'],//['green', 'yellow', 'red'],
    arcDelimiters: [this.needleValue],
    //rangeLabel: ['1','3'],
    needleStartValue: 50,
  }

  chartGuage() {


  }

  ngOnDestroy() {
  }
  constructor(private DataService: DataService) { }

  //For DropDown Function
  //Get country datalist
  venueList: any;
  selectedVenue: any;
  getCountryList() {
    this.globalData = globalConstants.predictWicket[this.format];
    this.cityList = this.globalData.city;
    this.formatData = globalConstants.formatData;
    this.tossWinner = this.globalData.toss_winner;
    this.neutralVenueList = this.globalData.neutralvenue;
    this.venueList = this.globalData.venue;
    console.log(this.venueList)
    this.tossDescisionList = this.globalData.toss_decision;
    this.team1List = this.globalData.team_1;
    this.team2List = this.globalData.team_2;
    // this.wicketList = globalConstants.wickets;
  }
  getVenueData() {
    this.Data['venue'] = this.selectedVenue;
  }
  //Get selected country from dropdown
  getCityData() {
    this.Data['city'] = this.selectedCity;
    // this.ODI();
  }
  //Set Format
  setFormat(value) {
    this.format = value;
    this.Data['format'] = value;
    this.getCountryList();
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
  nonStriker: any;
  playerOutList: any;
  setTeam1() {
    this.Data['team_1'] = this.team1;
    this.Data['team_bat'] = this.team1
    // this.batsmanList = this.globalData.other[this.team1].batsman//globalConstants.batsman[this.team1];
    //  this.bowlerList = globalConstants.bowler[this.team1];
    // console.log(globalConstants.batsman[this.team1])
    //console.log(globalConstants.batsman[this.team2])
    if (this.team1 != undefined) {
      this.batsmanList = []
      // this.bowlerList = []
      this.batsmanList = this.globalData.other[this.team1].batsman//.concat(globalConstants.batsman[this.team2]);
      this.nonStriker = this.globalData.other[this.team1].non_striker
      console.log(this.nonStriker)
      this.playerOutList = this.globalData.other[this.team1].player_out
      // this.bowlerList = globalConstants.bowler[this.team1]//.concat(globalConstants.bowler[this.team2]);

    }
    // else {
    //   this.batsmanList = this.globalData.other[this.team1].batsman
    //   //this.bowlerList = globalConstants.bowler[this.team1]
    // }
  }
  //set team 2
  setTeam2() {
    this.Data['team_2'] = this.team2;
    if (this.team2 != undefined) {
      //this.batsmanList = []
      // this.bowlerList=[]
      // if (this.team1 != undefined) {
      // this.batsmanList = []
      this.bowlerList = []
      //  this.batsmanList = globalConstants.batsman[this.team1].concat(globalConstants.batsman[this.team2]);
      this.bowlerList = this.globalData.other[this.team2].bowler//globalConstants.bowler[this.team1].concat(globalConstants.bowler[this.team2])
      //  }
      // else {
      //   this.batsmanList = globalConstants.batsman[this.team2]
      //   this.bowlerList=globalConstants.bowler[this.team2]
      // }
    }
    // console.log(this.batsmanList.length)

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
    this.DataService.getWicketPredictionData(this.Data).subscribe(response => {
      //Flag for server failure
      console.log(response)
      this.responseFailed = false;
      // this.result = response.score;
      // this.range = response.range;
      this.Response=response;
      this.result=response[0].over_number;
     // if (this.range[0] != undefined) { this.chartGuage(); }
      this.chartData('bar')
      this.meter()
      console.log(response)
    }, err => {
      //If server fails to respond
      console.log(err)
      this.responseFailed = true;
    });

  }
  meter() {
    let color,Data;
    Data=this.Response;
    console.log(Data[1].risk)
    if (Data[1].risk == "low") {
    this.needleValue = 15;
      this.centralLabel = "LOW";
      color = 'rgba(182, 250, 81, 0.74)'

    }
    else if (Data[1].risk == "high") { 
      this.needleValue = 83;
      this.centralLabel = "High";
       color = 'rgba(255, 136, 0, 0.671)' }
    else { this.needleValue = 50; 
      this.centralLabel = "MEDIUM"; 
      color = 'rgba(255, 208, 0, 0.671)' }
    this.options = {
      hasNeedle: true,
      needleColor: 'rgb(14, 37, 66)',
      needleUpdateSpeed: 1000,
      arcColors: [color, 'lightgrey'],//['green', 'yellow', 'red'],
      arcDelimiters: [this.needleValue],
      //rangeLabel: ['1','3'],
      needleStartValue: 50,
    }
    // this.needleValue== 50 // 83 , 15
    // this.centralLabel=
  }
  setExtraRun() {
    this.Data['extras_run'] = this.extraRun
  }
  setPlayerOut() {
    this.Data['player_out'] = this.playerOut;
  }
  setWicket() {
    this.Data['current_wicket'] = this.wicketSelect;
  }
  setcurrentScore() {
    this.Data['current_score'] = this.currentScore;
  }
  setRemBall() {
    this.Data['inning_no'] = this.remBall;
  }
  chartpie: any;
  Response:any;
  chartData(type) {
    let Data //= [{ "over_number": 36 }, { "risk": "low" }, { "ball_data": [{ "bno": 1, "percen_pd": 50 }, { "bno": 2, "percen_pd": 10 }, { "bno": 3, "percen_pd": 19 }, { "bno": 4, "percen_pd": 16.67 }, { "bno": 5, "percen_pd": 16.67 }, { "bno": 6, "percen_pd": 16.67 }] }]
    Data=this.Response
    this.meter()
    console.log(Data[2].ball_data)
    console.log(Data)
    let pieData = []
    let pielabel = []
    for (let j = 0; j < Data[2].ball_data.length; j++) {
      pieData.push(Data[2].ball_data[j].percen_pd)
      pielabel.push(Data[2].ball_data[j].bno)
    }
    console.log(pieData, pielabel)
    if(type=='pie' || type=='doughnut'){
    this.chartpie = new Chart(document.getElementById('myChart'), {
      // The type of chart we want to create
      type: type,
    //  plugins: [ChartDataLabels],
      // The data for our dataset
      data: {
        datasets: [{
          data: pieData,
          backgroundColor: ['rgba(182, 250, 81, 0.74)', 'rgba(240, 128, 128, 0.76)', 'rgba(0, 204, 255, 0.664)',
            'rgba(255, 192, 203, 0.795)', 'rgba(235, 172, 54, 0.685)', 'rgba(255, 208, 0, 0.671)'
          ]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: pielabel
      },

      // Configuration options go here
      options: {}
    });
  }
  else{    this.chartpie = new Chart(document.getElementById('myChart'), {
    // The type of chart we want to create
    type: type,
    // The data for our dataset
    data: {
      datasets: [{
        data: pieData,
        backgroundColor: ['rgba(182, 250, 81, 0.74)', 'rgba(240, 128, 128, 0.76)', 'rgba(0, 204, 255, 0.664)',
          'rgba(255, 192, 203, 0.795)', 'rgba(235, 172, 54, 0.685)', 'rgba(255, 208, 0, 0.671)'
        ]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: pielabel
    },

    // Configuration options go here
    options: {    scales: {
      yAxes:[{
          ticks: {
              min:5
          }
      }],
      xAxes:[{
        ticks: {
        },
        
    }],
      layout: {
        padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
        }
    }
  },
  responsive: true,
  legend: {
     // position: 'top',
      display:false
  },}
  });
}
  }
  ngOnInit() {
    //To get country data list on page load
    this.Data['format'] = this.format;
    this.getCountryList();
   // this.Response=[{ "over_number": 36 }, { "risk": "low" }, { "ball_data": [{ "bno": 1, "percen_pd": 50 }, { "bno": 2, "percen_pd": 10 }, { "bno": 3, "percen_pd": 19 }, { "bno": 4, "percen_pd": 16.67 }, { "bno": 5, "percen_pd": 16.67 }, { "bno": 6, "percen_pd": 16.67 }] }]
  //  this.chartData('bar')


  }

}
