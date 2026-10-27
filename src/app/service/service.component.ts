
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';

import { ServiceService } from '../api';
import { Service } from '../../models/service.model';
import { ServiceBoardComponent } from '../service-board/service-board.component';

@Component({
  selector: 'app-service',
  imports: [CommonModule, ServiceBoardComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  standalone: true
})
export class ServiceComponent implements OnInit {

  @Input() services: Service[] = [];

  isLoading = true;
  errorMessage = '';

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.serviceService.getAll()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (data: Service[]) => {
          this.services = data;
        },
        error: (error) => {
          console.error('Error loading services:', error);
          this.errorMessage = 'Failed to load services. Please try again.';
        }
      });
  }
}
