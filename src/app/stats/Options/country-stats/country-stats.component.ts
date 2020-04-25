import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { globalConstants } from './globalConstant';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'country-stat',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.css']
})
export class CountryStatsComponent implements OnInit {
  countryList: any;
  selectedCountry: any;
  format: any='ODI';
  responseFailed:any=false;
  //countryData contains all the table data inside an object
  countryData: any = { 'country':'','keys': '', 'Data': '' };

  constructor(private DataService: DataService,private spinnerService:Ng4LoadingSpinnerService) { }

  //For DropDown Function
  //Get country datalist
  getCountryList() {
    this.countryList = globalConstants.countryList.country;
  }
  //Get selected country from dropdown
  getCountryData() {
    this.spinnerService.show();
    this.ODI();
  }
  //Set Format
  setFormat(format) {
    this.format = format;
    console.log('format<<',this.format)
    this.spinnerService.show();
    this.ODI()
  }
  //for ODI format table and API call
  ODI() {
    if (this.selectedCountry != undefined && this.format != undefined) {
      this.DataService.getCountryStats(this.selectedCountry, this.format).subscribe(response => {
        //Flag for server failure
        this.responseFailed=false;
        let keys = Object.keys(response.Data[0]);
        //Saving Response Data to countryData object        
        this.countryData.keys = keys;
        this.countryData.Data = response.Data;
        this.countryData.country=response.Country_Name[0].Country + ' - ' +this.format;
        console.log(response)
        console.log(this.countryData);
        this.spinnerService.hide();
      },err=>{
        //If server fails to respond
        this.responseFailed=true;
        this.spinnerService.hide();
      });
    }
  }

  ngOnInit() {
    //To get country data list on page load
    this.getCountryList();
    this.selectedCountry='Afghanistan';
    
    //this.format='ODI'
    this.ODI()
  }

}
