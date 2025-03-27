import { Component } from '@angular/core';
import { DetailsComponent } from "./components/details/details.component";
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ProfitPipe } from './pipes/profit.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [UpperCasePipe, DatePipe, ProfitPipe]
})
export class AppComponent {
  title = 'The title of the App Component';

  today = new Date();

  sellingPrice = 15.39;
}
