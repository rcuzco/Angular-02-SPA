import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroes/heroes.data';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  idHeroe: number;
  heroe: Heroe = null;
  constructor(private activatedRoute:ActivatedRoute, private heroeService:HeroesService)
  {
    this.activatedRoute.params.subscribe(params =>
    {
      //console.log(params.id);
      this.idHeroe = +params.id;
      this.heroe = this.heroeService.getHeroe(this.idHeroe);
    });
  }

  ngOnInit()
  {
    
    //console.log(this.heroe);
  }

}
