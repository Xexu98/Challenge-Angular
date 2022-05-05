import { Component,  ElementRef, OnInit, ViewChild  } from '@angular/core';
import { PageService } from '../../services/page.service';
import { FilmDetails } from '../../interfaces/film.interface';
import { TvDetails } from '../../interfaces/tv.interface';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  public filmDetails!:FilmDetails;
  public tvDetails!:TvDetails ;
  
  constructor(private pageService:PageService) { 

    this.pageService.FilmDetail('414906');

    this.filmDetails=pageService.filmDetails;
    console.log(this.filmDetails);
   
  }

  load()
  {
   this.filmDetails=this.pageService.filmDetails;
   console.log('hola');
  }
  ngOnInit(): void {
    this.pageService.FilmDetail('414906');

   
    console.log(this.filmDetails);
  }

}
