import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divers',
  templateUrl: './divers.component.html',
  styleUrls: ['./divers.component.css']
})
export class DiversComponent implements OnInit {
  langage = [ 'français' , 'english' , 'arabic']
  loisir = ['Music' , 'Football' , 'Cinema']

  constructor() { }

  ngOnInit(): void {
  }

}
