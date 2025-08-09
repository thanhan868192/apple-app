import { Component } from '@angular/core';
import { HEROES_IMPORTS } from '../../shared/heroes.import';

@Component({
  selector: 'app-heroes',
  imports: [...HEROES_IMPORTS],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss'
})
export class Heroes {

}
