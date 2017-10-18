import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ParamService {

  constructor(private _route : ActivatedRoute) { }

  getParentParamId = () => this._route.parent.params.subscribe( (param: any) => +param['id'] );

  getGrandParentParamId = () => this._route.parent.parent.params.subscribe( (param: any) => +param['id'] );

  getChildrenParamId = () => this._route.children[0].params.subscribe( (param: any) => +param['id']);
  
}
