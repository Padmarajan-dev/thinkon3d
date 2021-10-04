import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  show:boolean=false;
  hide:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
