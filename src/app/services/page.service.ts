import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FilmDiscover, FilmResult } from '../interfaces/film.interface';
import { TvDiscover, TvResult } from '../interfaces/tv.interface';

@Injectable({
  providedIn: 'root'
})

export class PageService {

  private apiKey:string='';
  private servicioUrl:string='https://api.themoviedb.org/3';

  public resultadosTv: TvResult[]=[];
  public resultadosFilm: FilmResult[]=[];

  constructor(private http:HttpClient) { }

  pelisHome()
  {
    const params = new HttpParams()
    .set('api_key',this.apiKey);


    this.http.get<FilmDiscover>(`${this.servicioUrl}/discover/movie`,{params: params})
    .subscribe((resp)=>{console.log(resp.results);
    this.resultadosFilm=resp.results;
    //localStorage.setItem('resultados',JSON.stringify(this.resultados));
  });
  }

  
  seriesHome()
  {
    const params = new HttpParams()
    .set('api_key',this.apiKey);


    this.http.get<TvDiscover>(`${this.servicioUrl}/discover/tv`,{params: params})
    .subscribe((resp)=>{console.log(resp.results);
    this.resultadosTv=resp.results;
    //localStorage.setItem('resultados',JSON.stringify(this.resultados));
  });
  }
}
