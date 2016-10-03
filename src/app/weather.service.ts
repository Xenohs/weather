import { Injectable } from '@angular/core';
import { WeatherItem } from './weather-item/weather-item';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

const WEATHERITEMS: WeatherItem[] = [
  { name: 'Chicago'},
  { name: 'Dallas'},
  { name: 'Madison'},
  { name: 'San Francisco'},
  { name: 'Seattle'}
];

@Injectable()
export class WeatherService {

  constructor(private http: Http) {}

  fetchCurrent(){
    return Observable.forkJoin(
      this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + WEATHERITEMS[0].name + '&units=imperial&appid=f630449a4407b742703bf37d8e8c9057').map(
      (response) => response.json()),
     this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + WEATHERITEMS[1].name + '&units=imperial&appid=f630449a4407b742703bf37d8e8c9057').map(
       (response) => response.json()),
     this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + WEATHERITEMS[2].name + '&units=imperial&appid=f630449a4407b742703bf37d8e8c9057').map(
       (response) => response.json()),
     this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + WEATHERITEMS[3].name + '&units=imperial&appid=f630449a4407b742703bf37d8e8c9057').map(
       (response) => response.json()),
     this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + WEATHERITEMS[4].name + '&units=imperial&appid=f630449a4407b742703bf37d8e8c9057').map(
       (response) => response.json())
  );
  }



  fetchDetail(name: string){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + name + '&units=imperial&appid=f630449a4407b742703bf37d8e8c9057').map(
      (res) => res.json()
    );
  }

}
