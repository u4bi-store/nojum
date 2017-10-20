import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from '../../providers/core.service';

@Component({
  selector: 'app-store-toolbar',
  templateUrl: './store-toolbar.component.html',
  styleUrls: ['./store-toolbar.component.css']
})
export class StoreToolbarComponent implements OnInit {

  @Input() storeId : number;

  constructor(public core : CoreService) {}

  ngOnInit() {

  }

}
