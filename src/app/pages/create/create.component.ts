import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../providers/core.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  constructor(public core : CoreService) { }

  ngOnInit() {
    
  }

}
