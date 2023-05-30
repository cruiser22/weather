import { Component, OnInit } from '@angular/core';


import { WeatherService } from 'src/app/services/weather.service';
import { LocationService } from 'src/app/services/location.service';
import { CurrentWeather } from 'src/app/models';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  currentWeather!: CurrentWeather

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.locationService.getCurrentLocation().subscribe(position => {
      this.weatherService.getWeatherForecast(position.coords.latitude, position.coords.longitude).subscribe(data => {
        this.currentWeather = data.current_weather;
      });
    });
  }
}
