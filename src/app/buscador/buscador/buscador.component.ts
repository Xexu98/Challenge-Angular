import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {

  lista:string="Mi lista"
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private pageService:PageService) { }

  buscar(termino:string)
  {
    const valor = this.txtBuscar.nativeElement.value;
    
    if(valor.trim().length === 0){
      return;
    }

    this.pageService.buscarPyS(valor);
 
    this.txtBuscar.nativeElement.value='';
    this.lista="Resultados de la búsqueda"
  }
}
