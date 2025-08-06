import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {
  footerGroups = [
    {
      title: 'Shop and Learn',
      items: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch']
    },
    {
      title: 'Apple Wallet',
      items: ['Wallet', 'Apple Card']
    },
    {
      title: 'Account',
      items: ['Manage Your Apple Account', 'iCloud.com']
    }
    // Thêm các nhóm khác nếu cần
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
