import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { CoreService } from '../../providers/core.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-toolbar',
  templateUrl: './store-toolbar.component.html',
  styleUrls: ['./store-toolbar.component.css']
})
export class StoreToolbarComponent implements OnInit {

  public storeId : number;

  constructor(public core : CoreService, private route: ActivatedRoute) {}

  ngOnInit() {
    setTimeout( () => this.route.children[0].params.subscribe( (param: any) => this.storeId = +param['id'] ) , 500);

  }

}
