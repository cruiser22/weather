import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent {
  city!: string;
  weatherData: any; //
 errorMessage: string = '';

  constructor(private weatherService: WeatherService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.weatherService.getWeather(this.city).pipe(
        catchError(err => {
          this.handleError(err);
          return of(null);
        })
      ).subscribe(data => {
        if (data) {
          this.weatherData = data;
          console.log(this.weatherData);
          this.errorMessage = '';  // Clear the error message when we successfully get data
        }
      });
    }
  }

  handleError(err: any) {
    this.errorMessage = 'Choisir une ville.';
    console.error('An error occurred', err);
  }
}
