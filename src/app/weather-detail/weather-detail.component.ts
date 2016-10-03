import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WeatherService } from '../weather.service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  public weatherDetailItem: any;
  private name: any;
  public mapUrl: any;
  public trustedMapUrl: any;


  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private location: Location,
    private sanitizer: DomSanitizer
  ){}



  //This method will retrieve the 5 day forecast for the city name in the route param
  getWeatherItem(){
    this.weatherService.fetchDetail(this.name)
      .subscribe((data) => {
        this.weatherDetailItem = data;
      })
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.getWeatherItem();
    this.mapUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBWGg3E79kW0Qj1JM63p2aR4UJqX69NE_w&q=' + this.name;
    this.trustedMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  }


}
