import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvPlusGallery } from './tv-plus-gallery';

describe('TvPlusGallery', () => {
  let component: TvPlusGallery;
  let fixture: ComponentFixture<TvPlusGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvPlusGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvPlusGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
