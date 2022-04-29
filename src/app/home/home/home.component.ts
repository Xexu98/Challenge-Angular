import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor(private pageService:PageService) {
    this.pageService.pelisHome();
    this.pageService.seriesHome();
   }
 
  get resultadosFilm(){
    return this.pageService.resultadosFilm;
  }

   get resultadosTv(){
     return this.pageService.resultadosTv;
   }
 

}
