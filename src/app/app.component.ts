import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ServiceService} from './api';
import {FooterComponent} from './footer/footer.component';
import {ServiceDetailsComponent} from './service-details/service-details.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'lamsa_frontend';
}


