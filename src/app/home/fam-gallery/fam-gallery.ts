import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FAM_GALARRY_ITEMS } from '../../constants/fam-gallery.constant';

@Component({
  selector: 'app-fam-gallery',
  imports: [CommonModule],
  templateUrl: './fam-gallery.html',
  styleUrl: './fam-gallery.scss'
})
export class FamGallery implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('carousel', { static: false }) carouselRef!: ElementRef;
  animatedImage!: HTMLElement;
  items: any[] = [];
  originalItems = FAM_GALARRY_ITEMS;
  scrollPosition = 0;
  currentSpeed = 1;
  targetSpeed = 1; // px per frame
  rafId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    this.items = [];
    for (let i = 0; i < 5; i++) {
      this.items = this.items.concat(this.originalItems);
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animatedImage = document.querySelector('.animated-image') as HTMLElement;
      this.animateScroll();
    }
  }

  animateScroll() {
    const carousel = this.carouselRef.nativeElement;

    this.currentSpeed += (this.targetSpeed - this.currentSpeed) * 0.03;

    this.scrollPosition += this.currentSpeed;

    const totalWidth = carousel.scrollWidth / 2;
    if (this.scrollPosition >= totalWidth) {
      this.scrollPosition -= totalWidth;
    }

    carousel.style.transform = `translateX(-${this.scrollPosition}px)`;

    this.rafId = requestAnimationFrame(() => this.animateScroll());
  }

  slowScroll() {
    this.targetSpeed = 0.2;
  }

  fastScroll() {
    this.targetSpeed = 1;
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
