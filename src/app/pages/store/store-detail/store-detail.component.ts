import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

  public itemId: number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      
      this.itemId = +params['id'];
      console.log(this.itemId);
    
    });

  }

}
