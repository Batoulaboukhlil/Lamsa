
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { DressCollectionService } from '../api';

@Component({
  selector: 'app-dress-collection',
  imports: [CommonModule, RouterLink],
  templateUrl: './dress-collection.component.html',
  standalone: true,
  styleUrl: './dress-collection.component.css'
})
export class DressCollectionComponent {

  collections: any[] = [];

  isLoading = true;
  errorMessage = '';

  selectedImages: string[] = [];
  currentIndex = 0;
  isViewerOpen = false;

  constructor(
    private dressCollectionService: DressCollectionService
  ) {
    this.loadCollections();
  }

  loadCollections() {
    this.isLoading = true;
    this.errorMessage = '';

    this.dressCollectionService.getAll()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (collections: any) => {
          this.collections = collections;
          console.log(this.collections);
        },
        error: (error) => {
          console.error('Error loading collections:', error);
          this.errorMessage = 'Failed to load collections. Please try again.';
        }
      });
  }

  openGallery(images: string[], index: number = 0) {
    this.selectedImages = images;
    this.currentIndex = index;
    this.isViewerOpen = true;
  }

  closeGallery() {
    this.isViewerOpen = false;
  }

  nextImage() {
    if (this.selectedImages.length === 0) return;

    this.currentIndex =
      (this.currentIndex + 1) % this.selectedImages.length;
  }

  prevImage() {
    if (this.selectedImages.length === 0) return;

    this.currentIndex =
      (this.currentIndex - 1 + this.selectedImages.length)
      % this.selectedImages.length;
  }
}
