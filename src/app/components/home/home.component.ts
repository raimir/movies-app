import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule],
})
export class HomeComponent {

  slideCarousel = [ 
    {
      title: 'First slide label',
      description: 'Some representative placeholder content for the first slide.',
      imageUrl: '/photo-1575783970733-1aaedde1db74.png',
    },
    {
      title: 'Second slide label',
      description: 'Some representative placeholder content for the first slide.',
      imageUrl: '/photo-1575783970733-1aaedde1db74.png',
    },
    {
      title: 'Third slide label',
      description: 'Some representative placeholder content for the first slide.',
      imageUrl: '/photo-1575783970733-1aaedde1db74.png',
    },
    {
      title: 'Four slide label',
      description: 'Some representative placeholder content for the first slide.',
      imageUrl: '/photo-1575783970733-1aaedde1db74.png',
    }
  ]
}
