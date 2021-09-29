import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  slide: Array<object> = [
    {
      image: 'assets/Game_slide_1.jpg',
    },
    {
      image: 'assets/Game_slide_2.jpg',
    },
    {
      image: 'assets/Game_Slide_3.jpg',
    },
    {
      image: 'assets/Game_Slide_4.jpg',
    }
   ];
  constructor() { }

  ngOnInit(): void {


  }

}
