import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from '../../../../../providers/core.service';

@Component({
  selector: 'app-store-detail-main-header',
  templateUrl: './store-detail-main-header.component.html',
  styleUrls: ['./store-detail-main-header.component.css']
})
export class StoreDetailMainHeaderComponent implements OnInit {

  @Input() itemId : number;
  @Input() storeId : number;
  
  constructor(public core : CoreService) { }

  ngOnInit() {
  }

}
