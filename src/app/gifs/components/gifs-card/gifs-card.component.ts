import { Component, OnInit, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';


@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent implements OnInit {

  constructor() { }

  @Input()
  public gif!: Gif;

  ngOnInit() {
    if (!this.gif) {
      throw new Error('Gifs is required')
    }
  }

} 
