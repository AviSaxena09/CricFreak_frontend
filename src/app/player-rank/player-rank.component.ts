import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'player-rank',
  templateUrl: './player-rank.component.html',
  styleUrls: ['./player-rank.component.css']
})
export class PlayerRankComponent implements OnInit {
  TeamRankingData: any = '';//={"Type" :["test"], "Data" :[{"Pos":"1","Team":"India","Weighted Matches":"45","Points":"5,211","Rating":"116"},{"Pos":"2","Team":"New Zealand","Weighted Matches":"36","Points":"3,959","Rating":"110"},{"Pos":"3","Team":"Australia","Weighted Matches":"40","Points":"4,320","Rating":"108"},{"Pos":"4","Team":"England","Weighted Matches":"50","Points":"5,253","Rating":"105"},{"Pos":"5","Team":"South Africa","Weighted Matches":"36","Points":"3,537","Rating":"98"},{"Pos":"6","Team":"Sri Lanka","Weighted Matches":"46","Points":"4,191","Rating":"91"},{"Pos":"7","Team":"Pakistan","Weighted Matches":"33","Points":"2,795","Rating":"85"},{"Pos":"8","Team":"West Indies","Weighted Matches":"33","Points":"2,675","Rating":"81"},{"Pos":"9","Team":"Bangladesh","Weighted Matches":"27","Points":"1,636","Rating":"61"},{"Pos":"10","Team":"Afghanistan","Weighted Matches":"4","Points":"195","Rating":"49"},{"Pos":"11","Team":"Zimbabwe","Weighted Matches":"13","Points":"215","Rating":"17"},{"Pos":"12","Team":"Ireland","Weighted Matches":"3","Points":"0","Rating":"0"}] };
  TeamRankingKeys: any;
  TeamRankingDatabat: any = '';
  TeamRankingDataall: any = '';
  ActiveTab: any;
  gender: any;
  ApiError: any = false;
  tType: any;
  parameters: any = ['ball', 'bat', 'all_rounder']
  constructor(private dataService: DataService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    //this.ActiveTab='test';
    //this.gender='mens';
    //this.setFormatAndAPICall(this.ActiveTab);
    this.setGender('mens')
    this.setFormat('test')
  }
  setGender(gender) {
    this.gender = gender;
    if (this.gender != undefined && this.ActiveTab != undefined) {
      if(this.gender=='womens' && this.ActiveTab=='test'){this.ActiveTab='odi';}
   

      this.spinnerService.show();
      this.APICall()
    }
  }
  setType(type) {
    this.tType = type;
    if (this.gender != undefined && this.ActiveTab != undefined) {
      this.spinnerService.show();
      this.APICall()
    }
  }
  setFormat(format) {
    this.ActiveTab = format;
    //this.gender='mens';
    if (this.gender != undefined && this.ActiveTab != undefined) {
      this.spinnerService.show();
      this.APICall()
    }
  }
  APICall() {

    if (this.gender != undefined) {
      this.TeamRankingData = [];
      this.TeamRankingKeys = [];
      this.dataService.getPlayerRanking(this.gender, this.ActiveTab, this.parameters[0]).subscribe(res => {
        console.log(res);
       // this.spinnerService.hide();
        this.ApiError = false;
        this.TeamRankingData = res;
        this.TeamRankingKeys = Object.keys(this.TeamRankingData.Data[0]);
      }, err => {
      //  this.spinnerService.hide();
        this.ApiError = true;
      });

      this.TeamRankingDatabat = [];
     // this.TeamRankingKeys = [];
      this.dataService.getPlayerRanking(this.gender, this.ActiveTab, this.parameters[1]).subscribe(res => {
        console.log(res);
        //this.spinnerService.hide();
        this.ApiError = false;
        this.TeamRankingDatabat = res;
        //this.TeamRankingKeys = Object.keys(this.TeamRankingData.Data[0]);
      }, err => {
       // this.spinnerService.hide();
        this.ApiError = true;
      });

      this.TeamRankingDataall = [];
     // this.TeamRankingKeys = [];
      this.dataService.getPlayerRanking(this.gender, this.ActiveTab, this.parameters[2]).subscribe(res => {
        console.log(res);
        this.spinnerService.hide();
        this.ApiError = false;
        this.TeamRankingDataall = res;
       //this.TeamRankingKeys = Object.keys(this.TeamRankingData.Data[0]);
      }, err => {
        this.spinnerService.hide();
        this.ApiError = true;
      });
    }
  }
}
