import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroesData, Heroe } from './heroes.data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit
{
  
  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService, private _router:Router)
  {

  }
  
  ngOnInit()
  {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx: number)
  {
    console.log("llamando a verHeroe en componente heroes.component.ts")
    console.log(idx);
    this._router.navigate(['/heroe',idx]);
  }

}
