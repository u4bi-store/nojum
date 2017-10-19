import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-store-order',
  templateUrl: './store-order.component.html',
  styleUrls: ['./store-order.component.css']
})
export class StoreOrderComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

}
