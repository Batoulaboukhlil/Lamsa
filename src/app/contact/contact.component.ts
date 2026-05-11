import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ContactService} from '../api';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private contact: ContactService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submit() {
      if (this.form.valid) {
       // this.contact.send(this.form.value).subscribe(() => {
          alert('successfully sent!');
          this.form.reset();
        //});
      }
  }
}
