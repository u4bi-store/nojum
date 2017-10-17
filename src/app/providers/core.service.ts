import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CoreService {

  constructor(private _router : Router) { }

  onRouter(val : string){
    this._router.navigate([val]);
  }
  
}