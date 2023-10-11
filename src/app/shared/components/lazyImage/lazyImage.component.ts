import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lazyImage',
  templateUrl: './lazyImage.component.html',
  styleUrls: ['./lazyImage.component.css']
})
export class LazyImageComponent implements OnInit {

  constructor() { }

  @Input()
  public url!: string;

  @Input()
  public alt = '';


  public hasLoaded: boolean = false;

  ngOnInit() {
    if (!this.url) {
      throw new Error('url is required')
    }
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
