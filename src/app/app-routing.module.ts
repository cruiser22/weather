import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast.component';
import { DailyForecastComponent } from './components/daily-forecast/daily-forecast.component';

const routes: Routes = [
  { path: 'current-weather', component: CurrentWeatherComponent },
  { path: 'hourly-forecast', component: HourlyForecastComponent },
  { path: 'daily-forecast', component: DailyForecastComponent },
  { path: '', redirectTo: '/current-weather', pathMatch: 'full' }, // redirect to `current-weather` by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
