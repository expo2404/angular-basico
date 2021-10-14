import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations:[
  HeroeComponent,
  ListadoComponent],
  exports:[
    ListadoComponent
  ],
  imports:[ // aqui solo importamos modulos
    CommonModule // este modulo nos trae las directivas sin el se rompe la app

  ]

})
export class HeroesModule{

}
