import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { AppRoutingModule } from '../../app-routing.module';
import { TvDiscover, TvResult } from '../../interfaces/tv.interface';
import { FilmDiscover, FilmResult } from '../../interfaces/film.interface';
import { max } from 'rxjs';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent {

  film:FilmResult[]=this.pageService.resultadosFilm;
  series:TvResult[]=this.pageService.resultadosTv;
  resultados:(TvResult|FilmResult)[]=[];
  nombreResults:string[]=[];

  constructor(private pageService:PageService) { }

  get resultadosFilm()
  {
    return this.pageService.resultadosFilm;
  }
  get resultadosTv(){
    return this.pageService.resultadosTv;
  }

  get results()
  {
    let auxArray =[];
    let auxArrayN =[];
    for (var i=0, j=0, k=0; i < this.resultadosFilm.length || j < this.resultadosTv.length;) {
      if (i < this.resultadosFilm.length) {
        auxArray.push(this.resultadosFilm[i]);
        auxArrayN.push(this.resultadosFilm[i++].original_title);
      }
      if (j < this.resultadosTv.length) {
        auxArray.push(this.resultadosTv[j]);
        auxArrayN.push(this.resultadosTv[j++].name);
      }
    }
    this.resultados=auxArray;
    this.nombreResults=auxArrayN;
    console.log(auxArrayN);
    return this.resultados;
  }


}
