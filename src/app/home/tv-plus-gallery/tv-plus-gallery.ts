import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TV_GALARRY_ITEMS } from '../../constants/tv-plus-gallery.constant';

@Component({
  selector: 'app-tv-plus-gallery',
  imports: [CommonModule],
  templateUrl: './tv-plus-gallery.html',
  styleUrl: './tv-plus-gallery.scss'
})
export class TvPlusGallery {
  slides = TV_GALARRY_ITEMS
}
