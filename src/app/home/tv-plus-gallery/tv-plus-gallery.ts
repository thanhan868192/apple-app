import { Component } from '@angular/core';
import { TV_GALARRY_ITEMS } from '../../constants/tv-plus-gallery.constant';
import { TV_PLUS_GALLERY_IMPORTS } from '../../shared/tv-plus-gallery.import';

@Component({
  selector: 'app-tv-plus-gallery',
  imports: [...TV_PLUS_GALLERY_IMPORTS],
  templateUrl: './tv-plus-gallery.html',
  styleUrl: './tv-plus-gallery.scss'
})
export class TvPlusGallery {
  slides = TV_GALARRY_ITEMS
}
