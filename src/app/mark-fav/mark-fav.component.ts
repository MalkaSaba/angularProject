import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark-fav',
  templateUrl: './mark-fav.component.html',
  styleUrls: ['./mark-fav.component.css']
})
export class MarkFavComponent implements OnInit {
  title = 'MarkUp';
  isFavourite = true;
  

  constructor() { }

  ngOnInit() {
  }

}
