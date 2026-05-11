import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  booking: string;
  about: string;

  constructor() {
    this.about = `
We’re here to turn your event into an unforgettable experience. You’ll find everything you need to create the perfect celebration, from elegant wedding lighting to fun children’s games and beautiful decorations that add a special touch to any occasion. We also offer professional equipment such as fog and spark machines to create a magical atmosphere for your most important moments.

Our service goes beyond renting or selling equipment. You get delivery and installation, so you don’t have to worry about the setup. We also provide childcare services during events, allowing you to enjoy your time with complete peace of mind. Our goal is to give you a smooth, high-quality experience from start to finish.
`;

    this.booking = `
You can easily explore our services on the website, where you’ll find a clear overview of available items and estimated prices to help you choose what suits your event. If you need more details or want something tailored to your needs, our team is ready to help.

Reach out to us by phone or message, and we’ll answer your questions and confirm your booking as quickly as possible. We’re here to listen and provide the right solutions, so you can plan your event with confidence and ease.
`;
  }

}
