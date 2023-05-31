import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Easy Meteo';
   currentWeather: any;
  searchQuery: string = '';

  constructor(private weatherService: WeatherService) {}

  onSearch() {
    this.weatherService.getWeather(this.searchQuery).subscribe(
      (weatherData: any) => {
        this.currentWeather = weatherData;
      },
      (error: any) => {
        console.log('Erreur lors de la récupération des données météo :', error);
      }
    );
  }
}
