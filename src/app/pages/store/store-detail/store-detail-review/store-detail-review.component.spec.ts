import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailReviewComponent } from './store-detail-review.component';

describe('StoreDetailReviewComponent', () => {
  let component: StoreDetailReviewComponent;
  let fixture: ComponentFixture<StoreDetailReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
