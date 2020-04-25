import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'series-stat',
  templateUrl: './series-stats.component.html',
  styleUrls: ['./series-stats.component.css']
})
export class SeriesStatsComponent implements OnInit {
  retreivalError:any=false;
  seriesData:any;
  seriesDataKeys:any;
  p:any;
  constructor(private DataService:DataService,private spinnerService:Ng4LoadingSpinnerService) { }

  setFormat(format){
    this.DataService.getSeriesData(format).subscribe(response=>{
      console.log('sereis<<',response)
      this.spinnerService.hide();
      this.retreivalError=false;
      this.seriesData=response.Data;
      this.seriesDataKeys=Object.keys(this.seriesData[0]);
      console.log('series<<',this.seriesData,this.seriesDataKeys)
    },err=>{
      this.retreivalError=true;
      this.spinnerService.hide();
    });
  }
  ngOnInit() {
    this.setFormat('ODI');
  }

}
