import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../weather-item/weather-item';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherItems: Array<WeatherItem>;

  constructor(
    private weatherService: WeatherService,
    private router: Router
  ) {}

  //This method fetches the current data and binds it to the weatherItems array
  getWeather(): void {
   this.weatherService.fetchCurrent()
     .subscribe(data => this.weatherItems = data);
  }

  //This method will go to the details page for the weatherItem.city
  gotoDetail(weatherItem: WeatherItem): void {
    let link = ['/detail', weatherItem.name];
    this.router.navigate(link);
  }

  ngOnInit(): void {
    this.getWeather();
  }

}


