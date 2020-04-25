import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { globalConstants } from '../stats/Options/country-stats/globalConstant';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  LatestNews: any;
  constructor(private dataService: DataService, private spinner: Ng4LoadingSpinnerService) { }


  ngOnInit() {
    console.log(globalConstants.news)
    this.spinner.show();
    // this.LatestNews=globalConstants.news;
    this.dataService.getLatestNews().subscribe(res => {
      console.log('latest news<<', res);
      this.spinner.hide();
      this.LatestNews = res;
    }, err => {
      console.log(err);
      this.spinner.hide();
    });
  }

}
