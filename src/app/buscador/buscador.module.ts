import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    BuscadorComponent,
    ResultadosComponent
  ],
  exports:[BuscadorComponent,ResultadosComponent],
  imports: [
    CommonModule
  ]
})
export class BuscadorModule { }
