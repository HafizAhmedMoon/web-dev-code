import { Component } from '@angular/core';
import { CounterComponent } from "../counter/counter.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CounterComponent, RouterModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
