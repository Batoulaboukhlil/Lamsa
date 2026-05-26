import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressCollectionComponent } from './dress-collection.component';

describe('DressCollectionComponent', () => {
  let component: DressCollectionComponent;
  let fixture: ComponentFixture<DressCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DressCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DressCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
