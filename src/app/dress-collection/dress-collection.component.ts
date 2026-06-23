import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {DressCollectionService} from '../api';

@Component({
  selector: 'app-dress-collection',
  imports: [CommonModule, RouterLink],
  templateUrl: './dress-collection.component.html',
  standalone: true,
  styleUrl: './dress-collection.component.css'
})
export class DressCollectionComponent {

  collections: any[] = [];

  selectedImages: string[] = [];
  currentIndex = 0;
  isViewerOpen = false;

  openGallery(images: string[], index: number = 0) {
    this.selectedImages = images;
    this.currentIndex = index;
    this.isViewerOpen = true;
  }

  closeGallery() {
    this.isViewerOpen = false;
  }

  nextImage() {
    this.currentIndex =
      (this.currentIndex + 1) % this.selectedImages.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.selectedImages.length) % this.selectedImages.length;
  }
  constructor(private dressCollectionService: DressCollectionService) {
    this.dressCollectionService.getAll().subscribe((collections: any) => {
      this.collections = collections;
      console.log(this.collections);
    });
  }

}

