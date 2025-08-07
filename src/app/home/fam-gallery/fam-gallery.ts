import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';

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
  originalItems = [
    { image: '196x196SC.DN01.jpg' },
    { image: '196x196sr.jpg' },
    { image: '417x236_1.jpg' },
    { image: '417x236_2.jpg' },
    { image: '417x236_3.jpg' },
    { image: '417x236_4.jpg' },
  ];
  scrollPosition = 0;
  currentSpeed = 0.8;
  targetSpeed = 0.8; // px per frame
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
    this.targetSpeed = 0.8;
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
