import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer implements OnInit {
  footerGroups = [
    {
      title: 'Shop and Learn',
      items: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Accessories', 'Gift Cards']
    },
    {
      title: 'Apple Wallet',
      items: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']
    },
    {
      title: 'Account',
      items: ['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com']
    },
    {
      title: 'Entertainment',
      items: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store']
    },
    {
      title: 'Apple Store',
      items: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help']
    },
    {
      title: 'For Business',
      items: ['Apple and Business', 'Shop for Business']
    },
    {
      title: 'For Education',
      items: ['Apple and Education', 'Shop for K-12', 'Shop for College']
    },
    {
      title: 'For Healthcare',
      items: ['Apple in Healthcare', 'Health on Apple Watch']
    },
    {
      title: 'For Government',
      items: ['Shop for Government', 'Shop for Veterans and Military']
    },
    {
      title: 'Apple Values',
      items: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supplier Responsibility']
    },
    {
      title: 'About Apple',
      items: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple']
    }
  ];

  openSections: Set<number> = new Set();
  isDesktop: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreen();
  }

  checkScreen() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDesktop = window.innerWidth >= 768;
      if (this.isDesktop) {
        this.openSections.clear();
      }
    }
  }

  toggleSection(index: number) {
    if (this.isDesktop) return;
    if (this.openSections.has(index)) {
      this.openSections.delete(index);
    } else {
      this.openSections.add(index);
    }
  }

  isSectionOpen(index: number): boolean {
    return this.openSections.has(index);
  }
}
