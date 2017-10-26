import { Component, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CoreService } from '../../../providers/core.service';

import { DragScroll } from 'angular2-drag-scroll';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnDestroy {

  private subscription : Subscription;
  private flagNav : boolean = false;
  private isHover : boolean = false;

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
    '#00AE4C'
  ];
  @ViewChild('nav', {read: DragScroll}) ds: DragScroll;

  constructor(public core : CoreService) {
    
    let timer = Observable.timer(0, 500);
    this.subscription = timer.subscribe((e => {
      
      if(!this.isHover) this.flagNav ? this.ds.moveLeft() : this.ds.moveRight();

    }));

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  leftBoundStat(reachesLeftBound: boolean) {
    if(reachesLeftBound) this.flagNav = false;
  }

  rightBoundStat(reachesRightBound: boolean) {
    if(reachesRightBound) this.flagNav = true;

  }

  listHover = (bool : boolean) => this.isHover = bool;

}
