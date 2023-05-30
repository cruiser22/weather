import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Root } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_URL = 'https://api.open-meteo.com/v1/forecast';
  private apiKey = '92ca9c8c02ba4911a3b153828233005';

  constructor(private http: HttpClient) { }

  getWeatherForecast(latitude: number, longitude: number): Observable<Root> {
    return this.http.get<Root>(`${this.API_URL}?latitude=${latitude}&longitude=${longitude}&timezone=auto&daily=sunrise,sunset,uv_index_max,uv_index_clear_sky_max&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,winddirection_10m,weathercode,visibility,is_day&current_weather=true`);
  }

  getWeather(city: string): Observable<any> {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}`;
    return this.http.get<any>(apiUrl).pipe(
      tap(data => console.log(data))  // Ajoutez cette ligne
    );
  }

}
