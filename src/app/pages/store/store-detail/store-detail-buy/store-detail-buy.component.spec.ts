import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailBuyComponent } from './store-detail-buy.component';

describe('StoreDetailBuyComponent', () => {
  let component: StoreDetailBuyComponent;
  let fixture: ComponentFixture<StoreDetailBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
