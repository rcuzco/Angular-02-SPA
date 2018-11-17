import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroes/heroes.data';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit
{

  termino: string;
  heroes: Heroe[] = [];
  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService, private router: Router)
  {

  }

  ngOnInit()
  {
    this.activatedRoute.params.subscribe(params =>
    {      
      this.termino = params.termino;
      this.heroes = this.heroeService.buscarHeroes(this.termino);
      console.log(this.heroes);
    });
  }

  verHeroe(idx: number)
  {
    console.log("llamando a verHeroe en componente buscador.component.ts")
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }

}
