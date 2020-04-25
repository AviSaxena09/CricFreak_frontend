import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { globalConstants } from '../country-stats/globalConstant';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'player-stat',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {

  countryList: any;
  playerList : any;
  selectedCountry: any;
  playerId: any;
  selectedPlayer:any;
  responseFailed:any=false;
  Response:any=true;
  //GeneralData contains all the table data inside an object
  generalData: any ;
  generalDataKeys : any ;
  ballData : any ;
  ballDataKeys : any;
  batData : any;
  batDataKeys : any;
  constructor(private DataService: DataService,private spinnerService:Ng4LoadingSpinnerService) { }

  //For DropDown Function
  //Get country datalist
  getCountryList() {
    this.countryList = globalConstants.countryList.country;
  }
  //Get selected country from dropdown
  getCountryData() {
    console.log('playyer cntry<<',this.selectedCountry)
    //
    this.playerList=[];
    this.selectedPlayer='';
    this.playerList=globalConstants.playerName[this.selectedCountry];
    this.spinnerService.show();
   this.playerInfo();
  }
  //Set PlayerId
  setPlayerId() {
    this.playerId = this.playerList.find(plyr=>plyr.NAME==this.selectedPlayer);
    this.playerId=this.playerId.player_id;
    console.log(this.playerId)
    this.spinnerService.show();
    this.playerInfo()
  }
  //for PlayerId and API call
  playerInfo() {
    if (this.playerId != undefined) {
      this.DataService.getplayerInfo(this.playerId).subscribe(response => {
        //Flag for server failure
        this.spinnerService.hide();
        this.responseFailed=false;
        this.Response=false;
        console.log('player<<',response)
        //Saving Response Data to countryData object        
        this.generalData=response.General_table[0][0];
        this.generalDataKeys=Object.keys(this.generalData)
        this.ballData=response.Ball_table[0];
        this.ballDataKeys=Object.keys(this.ballData[0])
        this.batData=response.Bat_table[0];
        this.batDataKeys=Object.keys(this.batData[0])
        console.log('keys<<',this.generalDataKeys,'gd<<',this.generalData,'bd<<',this.ballData,'bt<<',this.batData)
      },err=>{
        //If server fails to respond
        this.responseFailed=true;
        this.spinnerService.hide();
        this.Response=true;
      });
    }
  }

  ngOnInit() {
    //To get country data list on page load
    this.getCountryList();
  }

}
