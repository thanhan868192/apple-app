import { Component } from '@angular/core';
import { PROMOS_DATA } from '../../constants/promos.constant';
import { PROMOS_IMPORTS } from '../../shared/promos.import';

@Component({
  selector: 'app-promos',
  imports: [...PROMOS_IMPORTS],
  templateUrl: './promos.html',
  styleUrl: './promos.scss'
})
export class Promos {
  promos = PROMOS_DATA;
}
