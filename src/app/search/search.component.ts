import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {  searchQuery: string = '';

@Output() searchEvent = new EventEmitter<string>();

search() {
  this.searchEvent.emit(this.searchQuery);
  this.searchQuery = ''; // Réinitialiser la requête de recherche après l'émission de l'événement
}
}
