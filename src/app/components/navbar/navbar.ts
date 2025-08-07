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
  isMenuOpen = false;
  activeItem: any = null;
  timeoutId: any;
  navItems: MyMenuItem[] = [
    {
      label: 'Store',
      subMenu: [
        {
          title: 'Mac',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
        {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
        {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
      ],
    },
    {
      label: 'Mac',
      subMenu: [
        {
          title: 'Mac',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
        {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        }, {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
      ],
    },
    {
      label: 'iPad',
      subMenu: [
        {
          title: 'Mac',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
        {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        }, {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
      ],
    },
    {
      label: 'iPhone',
      subMenu: [
        {
          title: 'Mac',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
        {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        }, {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
      ],
    },
    {
      label: 'Watch',
      subMenu: [
        {
          title: 'Mac',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
        {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        }, {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
      ],
    },
    {
      label: 'Vison',
      subMenu: [
        {
          title: 'Mac',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
        {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        }, {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
      ],
    },
    {
      label: 'AirPods',
      subMenu: [
        {
          title: 'Mac',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
        {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        }, {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
      ],
    },
    {
      label: 'TV & Home',
      subMenu: [
        {
          title: 'Mac',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
        {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        }, {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
      ],
    },
    {
      label: 'Entertainment',
      subMenu: [
        {
          title: 'Mac',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
        {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        }, {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
      ],
    },
    {
      label: 'Accessories',
      subMenu: [
        {
          title: 'Mac',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
        {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        }, {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
      ],
    },
    {
      label: 'Support',
      subMenu: [
        {
          title: 'Mac',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
        {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        }, {
          title: 'iMac & More',
          items: [
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
            { label: 'MacBook Pro' },
            { label: 'MacBook Air' },
          ]
        },
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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
