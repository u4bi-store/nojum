import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var mojs : any;

@Component({
  selector: 'app-main-feature',
  templateUrl: './main-feature.component.html',
  styleUrls: ['./main-feature.component.css']
})
export class MainFeatureComponent implements OnInit {

  @ViewChild('join') 
  public join : ElementRef;
  public regist : any;
  constructor() { }

  ngOnInit() {
    const COLORS = {
      RED:      '#FD5061',
      YELLOW:   '#F9CE00',
      BLACK:    '#29363B',
      WHITE:    'white',
      VINOUS:   '#FD5061'
    }
    
    const bgBurst = new mojs.Burst({
      left: 0, top: 0,
      count:  3,
      radius: 0,
      degree: 0,
      isShowEnd: false,
      children: {
        fill:           [ COLORS.RED, COLORS.YELLOW, COLORS.WHITE ],
        radius:         'stagger(200, 2)',
        scale:          { .25 : 3 },
        duration:       700,
        delay:          'stagger(50)',
        easing:         [ 'cubic.out', 'cubic.out', 'cubic.out' ],
        isForce3d:      true,
      }
    });
    
    const burst1 = new mojs.Burst({
      left: 0, top: 0,
      count:    5,
      radius:   { 50: 250 },
      children: {
        fill:   'white',
        shape:  'line',
        stroke: [ COLORS.WHITE, COLORS.VINOUS ],
        strokeWidth: 12, 
        radius: 'rand(30, 60)',
        radiusY: 0,
        scale: { 1.5: 0 },
        pathScale: 'rand(.5, 1)',
        degreeShift: 'rand(-360, 360)',
        isForce3d: true,
      }
    });
    
    const burst2 = new mojs.Burst({
      top: 0, left: 0,
      count:  3,
      radius: { 0: 250 },
      children: {
        shape:      [ 'circle', 'rect' ],
        points:     5,
        fill:       [ COLORS.WHITE, COLORS.VINOUS ],
        radius:     'rand(30, 60)',
        scale:      { 1: 0 },
        pathScale:  'rand(.5, 1)',
        isForce3d:  true
      }
    });
    
    const CIRCLE_OPTS = {
      left: 0, top: 0,
      fill:     COLORS.WHITE,
      scale:    { .2: 1 },
      opacity: { 1: 0 },
      isForce3d: true,
      isShowEnd: false
    }
    
    const circle1 = new mojs.Shape({
        ...CIRCLE_OPTS,
        radius:   200,
      });
    
    const circle2 = new mojs.Shape({
      ...CIRCLE_OPTS,
      radius:   240,
      easing: 'cubic.out',
      delay: 150,
    });
    
    this.regist = (e) => {
      burst1
        .tune({ x: e.pageX, y: e.pageY })
        .generate()
        .replay();

      burst2
        .tune({ x: e.pageX, y: e.pageY })
        .generate()
        .replay();

      circle1
        .tune({ x: e.pageX, y: e.pageY })
        .replay();

      circle2
        .tune({ x: e.pageX, y: e.pageY })
        .replay();

      bgBurst
        .tune({ x: e.pageX, y: e.pageY })
        .replay();
    };
  }

}
