import { Component, OnInit } from '@angular/core';
import { globalConstants } from '../stats/Options/country-stats/globalConstant';
import { DataService } from '../data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'ipl-records',
  templateUrl: './ipl-records.component.html',
  styleUrls: ['./ipl-records.component.css']
})
export class IPLRecordsComponent implements OnInit {
  RecordSelect:any;
  selectedrecord:any;
  TeamRankingData:any=[];
  TeamRankingKeys:any;
  constructor(private dataService:DataService,private spinner:Ng4LoadingSpinnerService) { }
  setselectedrecord(value){
    console.log(value)
    this.selectedrecord=value;
    this.spinner.show();
    this.getRecordData()
  }
  getRecordData(){
    this.dataService.getIPLRecords(this.selectedrecord).subscribe(res=>{
      console.log(res);
      this.TeamRankingData=res;
      this.TeamRankingKeys=Object.keys(res[0]);
      console.log(this.TeamRankingKeys)
      this.spinner.hide();
    },err=>{this.spinner.hide();console.log(err)})
  }
  ngOnInit() {
    this.RecordSelect=globalConstants.IPLrecords;
    this.selectedrecord='most-runs';
    this.getRecordData()
  }

}
