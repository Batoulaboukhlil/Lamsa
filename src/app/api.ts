import {contentChild, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_services = 'http://localhost:3000/api/services';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(API_services);
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${API_services}/${id}`);
  }

}


const API_categories = 'http://localhost:3000/api/categories';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(API_categories);
  }
}

const API_contact = 'http://localhost:3000/api/contact';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private http: HttpClient) {}

  send(data: any) {
    return this.http.post(API_contact, data);
  }
}

const API_serviceImages = 'http://localhost:3000/api/service-images';
@Injectable({ providedIn: 'root' })
export class ServiceImagesService {
  constructor(private http: HttpClient) {}
  send(data: any) {
    return this.http.post(API_serviceImages, data);
  }

  getImgByServiceId(serviceId: { id: string }) {
    return this.http.get(`${API_serviceImages}/service/${serviceId.id}`);
  }
}



