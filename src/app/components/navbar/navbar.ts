import { ChangeDetectionStrategy, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { NAV_ITEMS } from '../../constants/navbar.constant';
import { MyMenuItem } from '../../models/menu.model';
import { SharedModule } from '../../modules/shared.module';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  activeItem: any = null;
  activeItemMobile: any = null;
  navItems: MyMenuItem[] = NAV_ITEMS;
  isMenuOpen = false;
  timeoutId: any;
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { this.isBrowser = isPlatformBrowser(platformId); }

  @HostListener('window:resize')
  onResize() {
    if (!this.isBrowser) return;
    const isDesktop = window.matchMedia('(min-width: 992px)').matches;
    if (isDesktop && this.isMenuOpen) {
      this.closeMobileMenu();
    }
  }

  onNavItemClick(item: any) {
    if (!this.isMenuOpen) this.isMenuOpen = true;
    this.activeItemMobile = item;
    setTimeout(() =>
      document.querySelector('.panel-submenu .submenu-scroll')
        ?.scrollTo({ top: 0, behavior: 'auto' })
    );
  }

  onItemEnter(item: any) {
    if (this.isMenuOpen) {
      this.activeItemMobile = item;
    } else {
      this.activeItem = item;
    }
  }

  onNavLeave() {
    this.activeItem = null
  }

  onSubLeave() {
    this.onNavLeave();
  }

  toggleMenu() {
    if (!this.isBrowser) return;

    const isDesktop = window.matchMedia('(min-width: 992px)').matches;
    if (isDesktop) {
      this.closeMobileMenu();
      return;
    }

    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) this.lockScroll();
    else this.unlockScroll();
  }

  onBack() {
    this.activeItemMobile = null;
  }

  private lockScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  }
  private unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  }

  private closeMobileMenu() {
    this.isMenuOpen = false;
    this.activeItemMobile = null;
    this.unlockScroll();
  }

}
