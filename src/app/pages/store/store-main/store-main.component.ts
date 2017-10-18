import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-main',
  templateUrl: './store-main.component.html',
  styleUrls: ['./store-main.component.css']
})
export class StoreMainComponent implements OnInit {

  public storeId : number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.parent.params.subscribe( (param: any) => this.storeId = +param['id'] );

  }

}
