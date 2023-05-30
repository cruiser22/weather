import { Component, OnInit } from '@angular/core';
import { Daily } from 'src/app/models';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.css']
})
export class DailyForecastComponent implements OnInit {
  dailyForecast!: Daily;

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.locationService.getCurrentLocation().subscribe(position => {
      this.weatherService.getWeatherForecast(position.coords.latitude, position.coords.longitude).subscribe(data => {
        this.dailyForecast = data.daily;
      });
    });
  }
}
