import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from '../../../../providers/core.service';

@Component({
  selector: 'app-store-main-header',
  templateUrl: './store-main-header.component.html',
  styleUrls: ['./store-main-header.component.css']
})
export class StoreMainHeaderComponent implements OnInit {

  @Input() storeId : number;

  constructor(public core : CoreService) { }

  ngOnInit() {
  }

}
