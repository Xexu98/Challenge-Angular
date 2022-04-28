import { Component,ViewChild,ElementRef} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild("myNav") menu!:ElementRef<HTMLDivElement>;

  openNav() {
    console.log(this.menu);
    this.menu.nativeElement.style.height = "100%";
   
  }
  
  closeNav() {
    this.menu.nativeElement.style.height = "0%";
  }
}
