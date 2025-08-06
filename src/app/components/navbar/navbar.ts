import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MyMenuItem } from '../../model/menu.model';
import { SharedModule } from '../../module/shared.module';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  activeItem: any = null;
  timeoutId: any;
  navItems: MyMenuItem[] = [
    {
      label: 'Store',
      subMenu: [
        { label: 'MacBook Air', link: '/macbook-air' },
        { label: 'MacBook Pro', link: '/macbook-pro' },
        { label: 'MacBook Air', link: '/macbook-air' },
        { label: 'MacBook Pro', link: '/macbook-pro' },
        { label: 'MacBook Air', link: '/macbook-air' },
        { label: 'MacBook Pro', link: '/macbook-pro' },
        { label: 'MacBook Air', link: '/macbook-air' },
        { label: 'MacBook Pro', link: '/macbook-pro' },
      ],
    },
    {
      label: 'Mac',
      subMenu: [
        { label: 'MacBook Air', link: '/macbook-air' },
        { label: 'MacBook Pro', link: '/macbook-pro' },
        { label: 'MacBook Air', link: '/macbook-air' },
        { label: 'MacBook Pro', link: '/macbook-pro' },
        { label: 'MacBook Air', link: '/macbook-air' },
        { label: 'MacBook Pro', link: '/macbook-pro' },
        { label: 'MacBook Air', link: '/macbook-air' },
        { label: 'MacBook Pro', link: '/macbook-pro' },
      ],
    },
    {
      label: 'iPad',
      subMenu: [
        { label: 'MacBook Air', link: '/macbook-air' },
        { label: 'MacBook Pro', link: '/macbook-pro' },
      ],
    },
    {
      label: 'iPhone',
      subMenu: [
        { label: 'iPhone 15', link: '/iphone-15' },
        { label: 'iPhone 16', link: '/iphone-16' },
      ],
    },
    {
      label: 'Watch',
      subMenu: [
        { label: 'iPhone 15', link: '/iphone-15' },
        { label: 'iPhone 16', link: '/iphone-16' },
      ],
    },
    {
      label: 'Vison',
      subMenu: [
        { label: 'iPhone 15', link: '/iphone-15' },
        { label: 'iPhone 16', link: '/iphone-16' },
      ],
    },
    {
      label: 'AirPods',
      subMenu: [
        { label: 'iPhone 15', link: '/iphone-15' },
        { label: 'iPhone 16', link: '/iphone-16' },
      ],
    },
    {
      label: 'TV & Home',
      subMenu: [
        { label: 'iPhone 15', link: '/iphone-15' },
      ],
    },
    {
      label: 'Entertainment',
      subMenu: [
        { label: 'iPhone 15', link: '/iphone-15' },
        { label: 'iPhone 16', link: '/iphone-16' },
        { label: 'iPhone 16', link: '/iphone-16' },
      ],
    },
    {
      label: 'Accessories',
      subMenu: [
        { label: 'iPhone 15', link: '/iphone-15' },
        { label: 'iPhone 16', link: '/iphone-16' },
        { label: 'iPhone 15', link: '/iphone-15' },
        { label: 'iPhone 16', link: '/iphone-16' },
      ],
    },
    {
      label: 'Support',
      subMenu: [
        { label: 'iPhone 15', link: '/iphone-15' },
        { label: 'iPhone 16', link: '/iphone-16' },
      ],
    }
  ];

  ngOnInit() {
  }

  onMouseEnter(item: any) {
    clearTimeout(this.timeoutId);
    this.activeItem = item;
  }

  onMouseLeave() {
    this.activeItem = null;
  }

}
