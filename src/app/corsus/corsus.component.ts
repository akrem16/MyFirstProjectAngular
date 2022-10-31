import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corsus',
  templateUrl: './corsus.component.html',
  styleUrls: ['./corsus.component.css']
})
export class CorsusComponent implements OnInit {
  bac ={
    SectionBac : "tech",
    anneeBac : 2021,
    moyenne :12.41
  }
  connaissances =['html' , 'css' , 'JS']


  constructor() { }

  ngOnInit(): void {
  }

}
