import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FilmDiscover, FilmResult, FilmDetails } from '../interfaces/film.interface';
import { TvDiscover, TvResult, TvDetails } from '../interfaces/tv.interface';

@Injectable({
  providedIn: 'root'
})

export class PageService {

  private apiKey:string='19ca8220d17a91a2b05f1c389491bbaa';
  private servicioUrl:string='https://api.themoviedb.org/3';

  public resultadosTv: TvResult[]=[];
  public resultadosFilm: FilmResult[]=[];
  public filmDetails!:FilmDetails;
  public tvDetails!:TvDetails;

  constructor(private http:HttpClient) { }

  pelisHome()
  {
    const params = new HttpParams()
    .set('api_key',this.apiKey);


    this.http.get<FilmDiscover>(`${this.servicioUrl}/discover/movie`,{params: params})
    .subscribe((resp)=>{console.log(resp.results);
    this.resultadosFilm=resp.results;
 
  });
  }

  
  seriesHome()
  {
    const params = new HttpParams()
    .set('api_key',this.apiKey);


    this.http.get<TvDiscover>(`${this.servicioUrl}/discover/tv`,{params: params})
    .subscribe((resp)=>{console.log(resp.results);
    this.resultadosTv=resp.results;
    
  });
  }

  TvDetail(id:string)
  {
    const params = new HttpParams()
    .set('api_key',this.apiKey);

    this.http.get<TvDetails>(`${this.servicioUrl}/tv/`+id,{params: params})
    .subscribe((resp)=>{console.log(resp);
    this.tvDetails=resp;});

  }

  FilmDetail(id:string)
  {
    const params = new HttpParams()
    .set('api_key',this.apiKey);

   
    this.http.get<FilmDetails>(`${this.servicioUrl}/movie/`+id,{params: params})
    .subscribe((resp)=>{
    this.filmDetails=resp; });
    
  }


  buscarPyS(query: string){

    query=query.trim().toLocaleLowerCase();

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('query',query);

    this.http.get<FilmDiscover>(`${this.servicioUrl}/search/movie`,{params: params})
    .subscribe((resp)=>{console.log(resp.results);
    this.resultadosFilm=resp.results;});

    
    this.http.get<TvDiscover>(`${this.servicioUrl}/search/tv`,{params: params})
    .subscribe((resp)=>{console.log(resp.results);
      this.resultadosTv=resp.results;});

  }
}
