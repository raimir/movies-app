import { Component } from '@angular/core';
import { DetailsComponent } from "./components/details/details.component";
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ProfitPipe } from './pipes/profit.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule, NavbarComponent, HomeComponent, FooterComponent]
})
export class AppComponent {

}
