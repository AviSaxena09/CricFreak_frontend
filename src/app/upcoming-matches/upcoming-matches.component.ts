import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { globalConstants } from '../stats/Options/country-stats/globalConstant';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.css']
})
export class UpcomingMatchesComponent implements OnInit {
upcomingMatches:any
  constructor(private dataService:DataService,private spinner:Ng4LoadingSpinnerService) { }

  ngOnInit() {
   // this.upcomingMatches=globalConstants.upcomingRecords;
   this.spinner.show();
    console.log(this.upcomingMatches)
    this.dataService.getUpcomingMatches().subscribe(res=>{
      console.log(res);
      this.spinner.hide();
      this.upcomingMatches=res;
    },err=>{
      console.log(err)
      this.spinner.hide();
    })
  }
  getTeam1(value){
    return value.split('v')[0]
  }
  getTeam2(value){
    return value.split('v')[1]
  }
  getImg1(value){
    let temp=value.split('v')
    let path='../../assets/Flags/'+temp[0]+'.png'
    return path.replace(/\s/g, "")
  }
  getImg2(value){
    let temp=value.split('v')
    let path='../../assets/Flags/'+temp[1]+'.png'
    return path.replace(/\s/g, "")
  }
}
