import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../../../providers/core.service';

@Component({
  selector: 'app-store-main-header',
  templateUrl: './store-main-header.component.html',
  styleUrls: ['./store-main-header.component.css']
})
export class StoreMainHeaderComponent implements OnInit {

  constructor(public core : CoreService) { }

  ngOnInit() {
  }

}
