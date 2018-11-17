import { Injectable } from '@angular/core';
import { HeroesData, Heroe } from '../components/heroes/heroes.data';

@Injectable({
  providedIn: 'root'
})
export class HeroesService
{
  private heroesData: HeroesData = new HeroesData();

  constructor()
  {
    //console.log("servicio listo para usar!!!");
  }

  getHeroes()
  {
    for (let i = 0; i < this.heroesData.heroes.length; i++)
    {
      this.heroesData.heroes[i].idx = i;
    }
    return this.heroesData.heroes;
  }

  getHeroe(idx: number)
  {
    return this.heroesData.heroes[idx];
  }

  buscarHeroes(termino:string):Heroe[]
  {
    let heroesArray: Heroe[] = [];
    termino = termino.toLowerCase();
    let index: number = 0;
    for (let heroe of this.heroesData.heroes)
    {
      let nombre = heroe.nombre.toLowerCase();
      if (nombre.indexOf(termino)>=0)
      {
        heroe.idx = index;
        heroesArray.push(heroe);
      }
      index = index + 1;
    }
    return heroesArray;
  }
}


