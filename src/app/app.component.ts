import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

import { CarManufacturersComponent } from './car-manufacturer/car-manufacturer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CarManufacturersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CarsCheckout';
}
