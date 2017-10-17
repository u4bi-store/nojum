import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public routerUrl : string; 
  
  constructor(private router: Router){
    
    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event:NavigationStart) => this.routerUrl = event.url.substring(0, 6) );

  }

  ngOnInit() {
    
  }

}
