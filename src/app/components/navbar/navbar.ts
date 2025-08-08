import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NAV_ITEMS } from '../../constants/navbar.constant';
import { MyMenuItem } from '../../models/menu.model';
import { SharedModule } from '../../modules/shared.module';

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

  constructor() { }

  ngOnInit() { }

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
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }

}
