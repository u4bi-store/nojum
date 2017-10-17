import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CoreService {

  constructor(private _router : Router) { }

  onRouter(val : string){

    Array.from(document.querySelectorAll('div[data-name]')).forEach(el => el.parentNode.removeChild(el) );

    this._router.navigate([val]);
        
    document.documentElement.scrollTop = 0;
    
  }
  
}