import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CoreService } from '../../../providers/core.service';

import { DragScroll } from 'angular2-drag-scroll';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  public leftNavDisabled = false;
  public rightNavDisabled = false;
  public imagelist = [
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',   
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C',
    '#0055B2',
    '#00AE4C'
  ];
  @ViewChild('nav', {read: DragScroll}) ds: DragScroll;

  constructor(public core : CoreService) { }

  ngOnInit() {
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }

}
