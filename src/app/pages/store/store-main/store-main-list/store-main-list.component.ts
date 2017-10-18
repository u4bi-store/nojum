import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from '../../../../providers/core.service';

@Component({
  selector: 'app-store-main-list',
  templateUrl: './store-main-list.component.html',
  styleUrls: ['./store-main-list.component.css']
})
export class StoreMainListComponent implements OnInit {

  @Input() storeId : number;
  
  constructor(public core : CoreService) { }

  ngOnInit() {
  }

}
