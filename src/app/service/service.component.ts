import {Component, Input} from '@angular/core';
import {ServiceService} from '../api';
import {CommonModule} from '@angular/common';
import {Service} from '../../models/service.model';

import { Injectable } from '@angular/core';
import {ServiceBoardComponent} from '../service-board/service-board.component';

@Component({
  selector: 'app-service',
  imports: [CommonModule, ServiceBoardComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  @Input() services: Service[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getAll().subscribe((data: Service[]) => {
      this.services = data;
    });
  }
}
