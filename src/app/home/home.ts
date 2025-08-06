import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Promos } from './promos/promos';
import { TvPlusGallery } from './tv-plus-gallery/tv-plus-gallery';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Promos, TvPlusGallery],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('carousel', { static: false }) carouselRef!: ElementRef;

  animatedImage!: HTMLElement;
  items: any[] = [];
  originalItems = [
    { image: '/196x196SC.DN01.jpg' },
    { image: '/196x196sr.jpg' },
    { image: '/417x236_1.jpg' },
    { image: '/417x236_2.jpg' },
    { image: '/417x236_3.jpg' },
    { image: '/417x236_4.jpg' },
  ];


  scrollPosition = 0;
  currentSpeed = 1.5;
  targetSpeed = 1.5; // px per frame
  rafId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    this.items = [...this.originalItems, ...this.originalItems];
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animatedImage = document.querySelector('.animated-image') as HTMLElement;
      this.handleScroll();
      this.animateScroll();
    }
  }

  @HostListener('window:scroll', [])
  handleScroll(): void {
    if (!this.animatedImage) return;
    const rect = this.animatedImage.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      this.animatedImage.classList.add('active');
    }
  }

  animateScroll() {
    const carousel = this.carouselRef.nativeElement;

    this.currentSpeed += (this.targetSpeed - this.currentSpeed) * 0.05;

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
    this.targetSpeed = 1.5;
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.rafId);
    }
  }
}

