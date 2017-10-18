import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public storeId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => this.storeId = +params['id'] );
  }

}
