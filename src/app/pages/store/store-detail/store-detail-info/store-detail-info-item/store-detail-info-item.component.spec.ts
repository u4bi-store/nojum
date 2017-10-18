import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailInfoItemComponent } from './store-detail-info-item.component';

describe('StoreDetailInfoItemComponent', () => {
  let component: StoreDetailInfoItemComponent;
  let fixture: ComponentFixture<StoreDetailInfoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailInfoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
