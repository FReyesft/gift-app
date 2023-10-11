import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsCardComponent } from '../gifs-card/gifs-card.component';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [GifsCardComponent]
})
export class CardListComponent implements OnInit {

  constructor() { }


  @Input()
  public gifs: Gif[] = []

  ngOnInit() {
  }

}
