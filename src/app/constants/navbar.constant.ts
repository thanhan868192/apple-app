import { MyMenuItem } from "../models/menu.model";

export const NAV_ITEMS: MyMenuItem[] = [
  {
    label: 'Store',
    subMenu: [
      {
        title: 'Shop',
        items: [
          { label: 'Shop the Latest' },
          { label: 'Mac' },
          { label: 'iPad' },
          { label: 'iPhone' },
          { label: 'Apple Watch' },
          { label: 'Apple Vision Pro' },
          { label: 'Apple Accessories' },
        ],
        subItems: []
      },
      {
        title: 'Quick Links',
        items: [
          { label: 'Find a Store' },
          { label: 'Order Status' },
          { label: 'Apple Trade In' },
          { label: 'Financing' },
          { label: 'Personal Setup' },
          { label: 'College Student Offer' },
        ],
        subItems: []
      },
      {
        title: 'Shop Special Stores',
        items: [
          { label: 'Certified Refurbished' },
          { label: 'Education' },
          { label: 'Business' },
          { label: 'Veterans and Military' },
          { label: 'Government' },
        ],
        subItems: []
      },
    ],
  },
  {
    label: 'Mac',
    subMenu: [
      {
        title: 'Explore Mac',
        items: [
          { label: 'Explore All Mac' },
          { label: 'MacBook Air' },
          { label: 'MacBook Pro' },
          { label: 'iMac' },
          { label: 'Mac mini' },
          { label: 'Mac Studio' },
          { label: 'Mac Pro' },
          { label: 'Displays' },
        ],
        subItems: [
          { label: 'Compare Mac' },
          { label: 'Switch from PC to Mac' },
        ]
      },
      {
        title: 'Shop Mac',
        items: [
          { label: 'Shop Mac' },
          { label: 'Help Me Choose' },
          { label: 'Mac Accessories' },
          { label: 'Apple Trade In' },
          { label: 'Financing' },
          { label: 'College Student Offer' },
        ],
        subItems: []
      },
      {
        title: 'More from Mac',
        items: [
          { label: 'Mac Support' },
          { label: 'AppleCare' },
          { label: 'macOS Sonoma Preview' },
          { label: 'Apple Intelligence' },
          { label: 'Apps by Apple' },
          { label: 'Continuity' },
          { label: 'iCloud+' },
          { label: 'Mac for Business' },
          { label: 'Education' },
        ],
        subItems: []
      },
    ]
  },
  {
    label: 'iPad',
    subMenu: [
      {
        title: 'Explore iPad',
        items: [
          { label: 'Explore All iPad' },
          { label: 'iPad Pro' },
          { label: 'iPad Air' },
          { label: 'iPad' },
          { label: 'iPad mini' },
          { label: 'Apple Pencil' },
          { label: 'Keyboards' },
          { label: 'iPad Accessories' },
        ],
        subItems: [
          { label: 'Compare iPad' },
          { label: 'Why iPad' },
        ]
      },
      {
        title: 'Shop iPad',
        items: [
          { label: 'Shop iPad' },
          { label: 'iPad Accessories' },
          { label: 'Apple Trade In' },
          { label: 'Financing' },
          { label: 'College Student Offer' },
        ],
        subItems: []
      },
      {
        title: 'More from iPad',
        items: [
          { label: 'iPad Support' },
          { label: 'AppleCare+' },
          { label: 'iPadOS Preview' },
          { label: 'Apple Intelligence' },
          { label: 'Apps by Apple' },
          { label: 'iCloud+' },
          { label: 'Education' },
        ],
        subItems: []
      },
    ]
  },
  {
    label: 'iPhone',
    subMenu: [
      {
        title: 'Explore iPhone',
        items: [
          { label: 'Explore All iPhone' },
          { label: 'iPhone 15 Pro' },
          { label: 'iPhone 15' },
          { label: 'iPhone 14' },
          { label: 'iPhone 13' },
          { label: 'iPhone SE' },
        ],
        subItems: [
          { label: 'Compare iPhone' },
          { label: 'Switch from Android' },
        ]
      },
      {
        title: 'Shop iPhone',
        items: [
          { label: 'Shop iPhone' },
          { label: 'iPhone Accessories' },
          { label: 'Apple Trade In' },
          { label: 'Financing' },
        ],
        subItems: []
      },
      {
        title: 'More from iPhone',
        items: [
          { label: 'iPhone Support' },
          { label: 'AppleCare+' },
          { label: 'iOS Preview' },
          { label: 'Apple Intelligence' },
          { label: 'Apps by Apple' },
          { label: 'iCloud+' },
          { label: 'Wallet, Pay, Card' },
        ],
        subItems: []
      },
    ]
  },
  {
    label: 'Watch',
    subMenu: [
      {
        title: 'Explore Watch',
        items: [
          { label: 'Explore All Apple Watch' },
          { label: 'Apple Watch Series 9' },
          { label: 'Apple Watch SE' },
          { label: 'Apple Watch Ultra 2' },
        ],
        subItems: [
          { label: 'Compare Watch' },
          { label: 'Why Apple Watch' },
        ]
      },
      {
        title: 'Shop Watch',
        items: [
          { label: 'Shop Apple Watch' },
          { label: 'Apple Watch Bands' },
          { label: 'Apple Watch Accessories' },
          { label: 'Apple Trade In' },
          { label: 'Financing' },
        ],
        subItems: []
      },
      {
        title: 'More from Watch',
        items: [
          { label: 'Apple Watch Support' },
          { label: 'AppleCare+' },
          { label: 'watchOS Preview' },
          { label: 'Apple Fitness+' },
        ],
        subItems: []
      },
    ]
  },
  {
    label: 'Vision',
    subMenu: [
      {
        title: 'Explore Vision',
        items: [
          { label: 'Apple Vision Pro' },
          { label: 'Guided Tour' },
          { label: 'Tech Specs' },
        ],
        subItems: []
      },
      {
        title: 'Shop Vision',
        items: [
          { label: 'Shop Vision Pro' },
          { label: 'AppleCare+' },
        ],
        subItems: []
      },
      {
        title: 'More from Vision',
        items: [
          { label: 'Vision Pro Support' },
        ],
        subItems: []
      },
    ]
  },
  {
    label: 'AirPods',
    subMenu: [
      {
        title: 'Explore AirPods',
        items: [
          { label: 'Explore All AirPods' },
          { label: 'AirPods Pro (2nd generation)' },
          { label: 'AirPods (3rd generation)' },
          { label: 'AirPods (2nd generation)' },
          { label: 'AirPods Max' },
        ],
        subItems: [
          { label: 'Compare AirPods' },
        ]
      },
      {
        title: 'Shop AirPods',
        items: [
          { label: 'Shop AirPods' },
          { label: 'AirPods Accessories' },
        ],
        subItems: []
      },
      {
        title: 'More from AirPods',
        items: [
          { label: 'AirPods Support' },
          { label: 'AppleCare+' },
        ],
        subItems: []
      },
    ]
  },
  {
    label: 'TV & Home',
    subMenu: [
      {
        title: 'Explore TV & Home',
        items: [
          { label: 'Explore TV & Home' },
          { label: 'Apple TV 4K' },
          { label: 'HomePod' },
          { label: 'HomePod mini' },
        ],
        subItems: []
      },
      {
        title: 'Shop TV & Home',
        items: [
          { label: 'Shop Apple TV 4K' },
          { label: 'Shop HomePod' },
          { label: 'Shop Accessories' },
        ],
        subItems: []
      },
      {
        title: 'More from TV & Home',
        items: [
          { label: 'Apple TV App' },
          { label: 'Apple TV+' },
          { label: 'Home App' },
        ],
        subItems: []
      },
    ]
  },
  {
    label: 'Entertainment',
    subMenu: [
      {
        title: 'Explore Entertainment',
        items: [
          { label: 'Apple One' },
          { label: 'Apple TV+' },
          { label: 'Apple Music' },
          { label: 'Apple Arcade' },
          { label: 'Apple Fitness+' },
          { label: 'Apple News+' },
          { label: 'Apple Podcasts' },
          { label: 'Apple Books' },
        ],
        subItems: []
      },
      {
        title: 'Support',
        items: [
          { label: 'Apple TV+ Support' },
          { label: 'Apple Music Support' },
        ],
        subItems: []
      }
    ]
  },
  {
    label: 'Accessories',
    subMenu: [
      {
        title: 'Shop Accessories',
        items: [
          { label: 'Shop All Accessories' },
          { label: 'Mac Accessories' },
          { label: 'iPad Accessories' },
          { label: 'iPhone Accessories' },
          { label: 'Apple Watch Accessories' },
          { label: 'AirPods Accessories' },
          { label: 'TV & Home Accessories' },
        ],
        subItems: []
      },
      {
        title: 'Explore Accessories',
        items: [
          { label: 'Made by Apple' },
          { label: 'Beats by Dr. Dre' },
          { label: 'AirTag' },
          { label: 'Assistive Technologies' },
        ],
        subItems: []
      },
    ]
  },
  {
    label: 'Support',
    subMenu: [
      {
        title: 'Explore Support',
        items: [
          { label: 'iPhone' },
          { label: 'Mac' },
          { label: 'iPad' },
          { label: 'Watch' },
          { label: 'AirPods' },
          { label: 'Music' },
          { label: 'TV' },
        ],
        subItems: [{
          label: 'Explore Support'
        }]
      },
      {
        title: 'Get Help',
        items: [
          { label: 'Community' },
          { label: 'Check Coverage' },
          { label: 'Repair' },
          { label: 'Contact Us' },
        ],
        subItems: []
      },
      {
        title: 'Helpful topíc',
        items: [
          { label: 'Get AppleCare' },
          { label: 'Apple Account and Password' },
          { label: 'Billing & subsciprtions' },
          { label: 'Accessiblity' },
        ],
        subItems: []
      },
    ]
  },
];
