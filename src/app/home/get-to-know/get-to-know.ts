import { Component } from '@angular/core';
import { GET_TO_KNOW_IMPORTS } from '../../shared/get-to-know.import';

@Component({
  selector: 'app-get-to-know',
  imports: [...GET_TO_KNOW_IMPORTS],
  templateUrl: './get-to-know.html',
  styleUrl: './get-to-know.scss'
})
export class GetToKnow {
  cards = [
    {
      title: 'AI-opening possibilities.',
      subtitle: 'Apple Intelligence',
      placeholder: 'camera__exi2qfijti0y_medium_2x._01jpg.jpg',
      light: false,
    },
    {
      title: 'AI-opening possibilities.',
      subtitle: 'Apple Intelligence',
      placeholder: 'apple_intelligence__gbh77cvflkia_medium_2x_02.jpg',
      light: false,
    },
    {
      title: 'AI-opening possibilities.',
      subtitle: 'Apple Intelligence',
      placeholder: 'battery__2v7w6kmztvm2_medium_2x_03.jpg',
      light: false,
    },
    {
      title: 'AI-opening possibilities.',
      subtitle: 'Apple Intelligence',
      placeholder: 'innovation__os9bmmo3mjee_medium_2x_04.jpg',
      light: true,
    },
    {
      title: 'AI-opening possibilities.',
      subtitle: 'Apple Intelligence',
      placeholder: 'environment__e3v3gj88dl6q_medium_2x_05.jpg',
      light: true,
    },
    {
      title: 'AI-opening possibilities.',
      subtitle: 'Apple Intelligence',
      placeholder: 'personalize__dwg8srggrbo2_medium_2x_06.jpg',
      light: false,
    },
    {
      title: 'AI-opening possibilities.',
      subtitle: 'Apple Intelligence',
      placeholder: 'safety__bwp7rsowtjiu_medium_2x_07.jpg',
      light: false,
    },
    {
      title: 'AI-opening possibilities.',
      subtitle: 'Apple Intelligence',
      placeholder: 'privacy__ckc0wa30o55y_medium_2x_08.jpg',
      light: false,
    },
  ];

  onFullLoaded(ev: Event) {
    const img = ev.target as HTMLImageElement;
    img.classList.add('loaded');

    const wrap = img.closest('.img-wrap');
    wrap?.classList.add('full-loaded');
  }
}
