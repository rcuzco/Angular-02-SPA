import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../heroes/heroes.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit
{
  // @Input --> quiere decir que el componente recibirá la propiedad que tiene dicha decoración desde afuera, por ejemplo desde el componente
  //que contiene a este componente

  @Input() heroe: Heroe = { aparicion: "", bio: "", casa: "", img: "", nombre: "" };
  @Input() idx: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router)
  {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit()
  {
  }

  verHeroe()
  {
    console.log("llamando a verHeroe en componente heroe-tarjeta.component.ts")
    //this.router.navigate(['/heroe', idx]);
    //console.log(this.heroe);
    //console.log(this.heroe.idx);
    this.heroeSeleccionado.emit(this.heroe.idx);
  }

}
