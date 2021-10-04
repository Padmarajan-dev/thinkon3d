import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[slideimage]'
})
export class SeriesofimageDirective {
  index:number=0;
  @HostBinding('attr.src') ImageSource;
  @Input() Arrayofimages:any;

  slide: Array<any> = [
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

  

  constructor() { 
    this.ImageSource = this.slide[this.index].image;
    setTimeout(()=>{
    setInterval(()=>{
      this.ChangeImage()
    },8000);
  },2000);
  }
  ChangeImage() {
    if(this.index<this.slide.length-1)
    {
      this.index +=1;
    }else 
    {
        this.index =0;
    }
    this.ImageSource = this.slide[this.index].image;
  }
   

}
