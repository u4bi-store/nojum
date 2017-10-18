import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailMainReviewComponent } from './store-detail-main-review.component';

describe('StoreDetailMainReviewComponent', () => {
  let component: StoreDetailMainReviewComponent;
  let fixture: ComponentFixture<StoreDetailMainReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailMainReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailMainReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
