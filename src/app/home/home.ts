import { Component } from '@angular/core';
import { HOME_IMPORTS } from '../shared/home.import';

@Component({
  selector: 'app-home',
  imports: [...HOME_IMPORTS],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor() { }
}

