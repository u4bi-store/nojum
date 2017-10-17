import { Component, OnInit } from '@angular/core';
declare var mojs : any;

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const COLORS = {
      RED:      '#FD5061',
      YELLOW:   '#FFCEA5',
      BLACK:    '#29363B',
      WHITE:    'white',
      VINOUS:   '#FF7360'
    }
    
    const DURATION = 500;
    const CNT = 10;
    const PARENT_H = 50;
    const BURST_R = 75;
    
    const makeDust = (dir = -1) => {
      
      const parent = new mojs.Shape({
        left: 0,  top: 0,
        width:        100,
        height:       50,
        radius:       0,
        x:            { 0 : dir * window.innerWidth / 3  },
        duration:     1.2 * DURATION,
        isShowStart:  true,
        isTimelineLess: true,
        isForce3d:    true
      });
    
      parent.el.style.overflow = 'hidden';

      const burst = new mojs.Burst({
        parent:   parent.el,
        count:    CNT,
        top:      PARENT_H + BURST_R,
        degree:   90,
        radius:   BURST_R,
        angle:    ( dir === -1) ? { [-90] : 40 } : { [0] : -130 },
        children: {
          fill:       'white',
          delay:      ( dir === -1 )
                          ? `stagger(${DURATION}, -${DURATION/CNT})`
                          : `stagger(${DURATION/CNT})`,
          radius:     'rand(8, 25)',
          direction:  -1,
          isSwirl:    true,
          isForce3d: true
        }
      });
    
      const fadeBurst = new mojs.Burst({
        parent:     parent.el,
        count:      2,
        degree:     0,
        angle:      -1*dir*75,
        radius:     { 0 : 100 },
        top:        '90%',
        timeline:   { delay: .8*DURATION },
        children: {
          fill: 'white',
          pathScale: [ .65, 1 ],
          radius: 'rand(12, 15)',
          direction: [ dir, -1*dir ],
          isSwirl:    true,
          isForce3d: true
        }
      }); 
    
      const timeline = new mojs.Timeline();
      timeline.add( parent, burst, fadeBurst );
    
      return { parent, timeline };
    }
    
    const circle = new mojs.Shape({
      left: 0, top: 0,
      radius:   150,
      scale:    { 0 : 1 },
      opacity:  { 1: 0 },
      shape:    'circle',
      stroke:   'white',
      strokeWidth: 10,
      fill:     'none',
      duration: 1.5*DURATION,
      isForce3d: true,
      isTimelineLess: true,
    });
    
    const cloud = new mojs.Burst({
      left: 0, top: 0,
      radius:   { 4: 49 },
      angle:    45,
      count:    12,
      children: {
        radius:       10,
        fill:         'white',
        scale:        { 1: 0, easing: 'sin.in' },
        pathScale:    [ .7, null ],
        degreeShift:  [ 13, null ],
        duration:     [ 500, 700 ],
        isShowEnd:    false,
        isForce3d:    true
      }
    });
    
    const burst = new mojs.Burst({
      left: 0, top: 0,
      radius: { 0: 150 },
      count: 2,
      angle: 90,
      children: {
        shape: 'rect',
        fill: COLORS.VINOUS ,
        radius: 15,
        duration: DURATION,
        isForce3d: true
      }
    });
    
    const burst2 = new mojs.Burst({
      left: 0, top: 0,
      count:    5,
      radius:   { 0: 150 },
      angle:    90,
      children: {
        shape:    'line',
        stroke:   COLORS.VINOUS,
        strokeWidth: 5,
        strokeLinecap: 'round',
        radius:   25,
        // angle:    {  0: 360  },
        scale:    1,
        scaleX:   { 1: 0 },
        duration: DURATION,
        isForce3d: true
      }
    });
    
    const dust1 = makeDust(-1);
    const dust2 = makeDust(1);
    
    const timeline = new mojs.Timeline({ delay: 600, repeat: 999 });
    timeline
      .add( dust1.timeline, dust2.timeline )
      .add( circle, cloud, burst, burst2 );

      const x = window.innerWidth / 2,
            y = 990;
      
      const coords = { x, y };
      circle.tune(coords); cloud.tune(coords);
      burst.tune(coords); burst2.tune(coords);
      dust1.parent.tune({ x: { [x] : x - window.innerWidth / 3 }, y });
      dust2.parent.tune({ x: { [x] : x + window.innerWidth / 3 }, y });

      timeline.replay();

      window.addEventListener('resize', (e) => {

        const x = window.innerWidth / 2,
              y = 990;

        const coords = { x, y };
        circle.tune(coords); cloud.tune(coords);
        burst.tune(coords); burst2.tune(coords);
        dust1.parent.tune({ x: { [x] : x - window.innerWidth / 3 }, y });
        dust2.parent.tune({ x: { [x] : x + window.innerWidth / 3 }, y });

      });      

  }

}
