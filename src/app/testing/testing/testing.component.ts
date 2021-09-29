import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
export interface PlayerAchivements{
  PlayerName:string;
  NoMatches:number;
  CurrentScore:number;
  HighestScore:number;
}
var PLAYER_ACHIVEMENTS:PlayerAchivements[] = [
  {PlayerName:'Jhon',NoMatches:22,CurrentScore:1200,HighestScore:3000},
  {PlayerName:'Matthew',NoMatches:19,CurrentScore:1700,HighestScore:4568},
  {PlayerName:'Ben',NoMatches:13,CurrentScore:600,HighestScore:1456},
  {PlayerName:'Rick',NoMatches:24,CurrentScore:1500,HighestScore:2000},
];

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  PlayersRecord = PLAYER_ACHIVEMENTS;
  ColumnHeader=["index","PlayerName","CurrentScore","HighestScore"];
  dataSource = this.PlayersRecord;
  constructor() { }

  ngOnInit(): void {
  }

}
