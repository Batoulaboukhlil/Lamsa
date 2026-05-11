import {Component, Input} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {ServiceService} from '../api';
import { CommonModule } from '@angular/common';
import {Service} from '../../models/service.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-board',
  imports: [CommonModule],
  templateUrl: './service-board.component.html',
  styleUrl: './service-board.component.css',
  providers: [ServiceService],
})
export class ServiceBoardComponent {
  @Input() service!: Service;

  constructor(private serviceService: ServiceService, private router: Router) {}

  ngOnInit(): void {}

  goToDetails(service: Service) {
    console.log('Clicked service:', service);

    if (service && service._id) {
      this.router.navigate(['/service-details', service._id]);
    } else {
      console.error('Service or ID is missing!');
    }
  }
}
