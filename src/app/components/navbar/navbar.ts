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
  activeItem: any = null;
  navItems: MyMenuItem[] = NAV_ITEMS;
  isMenuOpen = false;
  timeoutId: any;

  ngOnInit() {
  }

  onItemEnter(item: any) {
    this.activeItem = item;
  }

  onNavLeave() {
    this.activeItem = null
  }

  onSubLeave() {
    this.onNavLeave();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
