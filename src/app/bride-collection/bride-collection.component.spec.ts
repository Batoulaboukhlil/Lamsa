import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideCollectionComponent } from './bride-collection.component';

describe('BrideCollectionComponent', () => {
  let component: BrideCollectionComponent;
  let fixture: ComponentFixture<BrideCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrideCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrideCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
