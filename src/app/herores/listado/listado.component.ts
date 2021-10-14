import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent implements OnInit {
heroes:string[]=["goku","trunks","gohan"]
borrado:string=""

borrar(){
  this.borrado=this.heroes.splice(0,1).toString()

}

  constructor() { }

  ngOnInit(): void {
  }

}
