import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  constructor(private router: Router) {}

  search() {
    this.router.navigate(['/city', this.searchQuery]);
    this.searchQuery = '';
  }
}
