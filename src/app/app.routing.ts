import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import {WeatherDetailComponent} from "./weather-detail/weather-detail.component";

const appRoutes: Routes = [
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'detail/:name',
    component: WeatherDetailComponent
  },
  {
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);
