import { Component } from '@angular/core';
import { GET_TO_KNOW_IMPORTS } from '../../shared/get-to-know.import';
import { GET_TO_KNOW_ITEMS } from '../../constants/get-to-know.constant';

@Component({
  selector: 'app-get-to-know',
  imports: [...GET_TO_KNOW_IMPORTS],
  templateUrl: './get-to-know.html',
  styleUrl: './get-to-know.scss'
})
export class GetToKnow {
  cards = GET_TO_KNOW_ITEMS;

  onFullLoaded(ev: Event) {
    const img = ev.target as HTMLImageElement;
    img.classList.add('loaded');

    const wrap = img.closest('.img-wrap');
    wrap?.classList.add('full-loaded');
  }
}
