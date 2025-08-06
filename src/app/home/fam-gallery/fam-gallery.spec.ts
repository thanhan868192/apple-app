import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamGallery } from './fam-gallery';

describe('FamGallery', () => {
  let component: FamGallery;
  let fixture: ComponentFixture<FamGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
