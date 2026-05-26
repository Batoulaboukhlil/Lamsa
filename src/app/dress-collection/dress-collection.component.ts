import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dress-collection',
  imports: [CommonModule, RouterLink],
  templateUrl: './dress-collection.component.html',
  styleUrl: './dress-collection.component.css'
})
export class DressCollectionComponent {

  collections = [
    {
      title: 'Royal Bride',
      priceRange: '$1000 - $5000',
      cover: '../assets/royal/1.png',
      images: [
        '../assets/royal/1.png',
        '../assets/royal/2.png',
        '../assets/royal/3.png',
        '../assets/royal/4.png'
      ]
    },
    {
      title: 'Classic White',
      priceRange: '$1000 - $5000',
      cover: '../assets/classic/1.png',
      images: [
        '../assets/classic/1.png',
        '../assets/classic/2.png',
        '../assets/classic/3.png',
        '../assets/classic/4.png'

      ]
    },
    {
      title: 'Luxury blue',
      priceRange: '$100 - $500',
      cover: '../assets/blue/1.png',
      images: [
        '../assets/blue/1.png',
        '../assets/blue/2.png',
        '../assets/blue/3.png'
      ]
    },
    {
      title: 'Luxury blue',
      priceRange: '$300 - $500',
      cover: '../assets/1.png',
      images: [
        '../assets/1.png',
        '../assets/2.png',
        '../assets/3.png'
      ]
    }
  ];

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
}
