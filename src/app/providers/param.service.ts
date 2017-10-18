import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ParamService {

  constructor(private _route : ActivatedRoute) { }

  getParentParam = () => this._route.parent.params;

  getGrandParentParam = () => this._route.parent.parent.params;

  getChildrenParam = () => this._route.children[0].params;

}
