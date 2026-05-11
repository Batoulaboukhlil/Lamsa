import {Component, Input} from '@angular/core';
import {Service} from '../../models/service.model';
import {ServiceImagesService, ServiceService} from '../api';
import {ServiceImg} from '../../models/serviceImg';
import {CommonModule, NgClass} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-service-details',
  imports: [CommonModule,
    NgClass
  ],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent {
  @Input() service!: Service;
  @Input() img: ServiceImg[] = [];

  constructor(    private route: ActivatedRoute,
                  private serviceService: ServiceService, private serviceImagesService: ServiceImagesService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID from URL:', id);

    if (id) {
      this.serviceService.getById(id).subscribe((data) => {
        this.service = data;
        console.log(this.service.options.length)
      });
      this.serviceImagesService.getImgByServiceId({ id }).subscribe((data) => {
        this.img = data as ServiceImg[];
        console.log(this.img[0].imageUrl);
      });
    }
  }
}
