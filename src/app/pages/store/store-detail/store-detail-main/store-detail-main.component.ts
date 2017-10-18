import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-detail-main',
  templateUrl: './store-detail-main.component.html',
  styleUrls: ['./store-detail-main.component.css']
})
export class StoreDetailMainComponent implements OnInit {

  public itemId : number;
  public storeId : number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.parent.params.subscribe( (param: any) => this.itemId = +param['id'] );
    this.route.parent.parent.params.subscribe( (param: any) => this.storeId = +param['id'] );
    
  }

}
