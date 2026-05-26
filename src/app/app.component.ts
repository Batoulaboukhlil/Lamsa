import {Component, NgModule} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ServiceService} from './api';
import {FooterComponent} from './footer/footer.component';
import {ServiceDetailsComponent} from './service-details/service-details.component';
import {filter} from 'rxjs';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'lamsa_frontend';
  showLayout = true;

  constructor(private router: Router) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        this.showLayout = this.router.url !== '/collection';

      });
  }
}


