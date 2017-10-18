import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../providers/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public core : CoreService) { }

  ngOnInit() {
  }

}
