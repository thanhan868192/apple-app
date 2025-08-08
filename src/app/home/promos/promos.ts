import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROMOS_DATA } from '../../constants/promos.constant';

@Component({
  selector: 'app-promos',
  imports: [CommonModule],
  templateUrl: './promos.html',
  styleUrl: './promos.scss'
})
export class Promos {
  promos = PROMOS_DATA;
}
