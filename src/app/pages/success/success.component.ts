import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../providers/core.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(public core : CoreService) { }

  ngOnInit() {
  }

}
