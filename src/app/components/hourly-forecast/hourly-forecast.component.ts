import { Component, OnInit } from '@angular/core';


import { WeatherService } from 'src/app/services/weather.service';
import { LocationService } from 'src/app/services/location.service';
import { Hourly } from 'src/app/models';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.css']
})

  export class HourlyForecastComponent implements OnInit {
    hourlyForecast!: Hourly;

    constructor(
      private weatherService: WeatherService,
      private locationService: LocationService
    ) { }

    ngOnInit(): void {
      this.locationService.getCurrentLocation().subscribe(position => {
        this.weatherService.getWeatherForecast(position.coords.latitude, position.coords.longitude).subscribe(data => {
          this.hourlyForecast = data.hourly;
        });
      });
    }
  }

