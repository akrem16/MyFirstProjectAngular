import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-perso',
  templateUrl: './info-perso.component.html',
  styleUrls: ['./info-perso.component.css']
})
export class InfoPersoComponent implements OnInit {
  NomPrenom = 'akrem maamri';
  detenaiss= '4/01/2002';
  LieuNaiss = 'Tunis';
  Etat = 'celeba';
  genre ='homme';
  adress = 'Iset Sidi Bouzid';
  photo ='../../assets/profile-pic (2).png'
  constructor() { }
  ngOnInit(): void {
  }

}