import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../providers/core.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public core : CoreService) { }

  ngOnInit() {
  }

}
