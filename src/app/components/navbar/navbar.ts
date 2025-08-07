import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MyMenuItem } from '../../models/menu.model';
import { SharedModule } from '../../modules/shared.module';
import { NAV_ITEMS } from '../../constants/navbar.constant';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isMenuOpen = false;
  activeItem: any = null;
  timeoutId: any;
  navItems: MyMenuItem[] = NAV_ITEMS;

  ngOnInit() {
  }

  onMouseEnter(item: any) {
    clearTimeout(this.timeoutId);
    this.activeItem = item;
  }

  onMouseLeave() {
    this.activeItem = null;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
