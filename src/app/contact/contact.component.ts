import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ContactService, ServiceService} from '../api';
import {Service} from '../../models/service.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    NgForOf,
  ],
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.css'
})
class ContactComponent implements OnInit {

  form!: FormGroup;
  @Input() services: Service[] = [];

  constructor(private fb: FormBuilder, private contact: ContactService, private serviceService: ServiceService)
  {}


  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      serviceName: ['', Validators.required],
      message: ['', Validators.required],
    });

    this.serviceService.getAll().subscribe((data: Service[]) => {
      this.services = data;
    });
  }



  submit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.contact.send(this.form.value).subscribe({
        next: () => {
          alert('Successfully sent!');
          this.form.reset();
        },
        error: () => {
          alert('Failed to send message');
        }
      });
    }
  }
}

export default ContactComponent
