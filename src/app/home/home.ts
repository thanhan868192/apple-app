import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Promos } from './promos/promos';
import { TvPlusGallery } from './tv-plus-gallery/tv-plus-gallery';
import { Heroes } from "./heroes/heroes";
import { FamGallery } from "./fam-gallery/fam-gallery";

@Component({
  selector: 'app-home',
  imports: [CommonModule, Promos, TvPlusGallery, Heroes, FamGallery],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor() { }
}

