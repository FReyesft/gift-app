import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input 
  (keydown.enter)="searchTag()"
  #txtTagInput
  type="text" class="form-control" placeholder="buscar gifs" />
  `
})
export class SearchBoxComponent implements OnInit {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag)
    this.tagInput.nativeElement.value = ''
  }


  ngOnInit() {
  }


}
