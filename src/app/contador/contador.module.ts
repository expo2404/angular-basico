import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';



@NgModule({
  declarations:[
    ContadorComponent
  ],
  exports:[
    ContadorComponent
  ],
  imports:[ // aqui solo importamos modulos
    CommonModule // este modulo nos trae las directivas sin el se rompe la app
  ]

})
export class ContadorModule{

}
