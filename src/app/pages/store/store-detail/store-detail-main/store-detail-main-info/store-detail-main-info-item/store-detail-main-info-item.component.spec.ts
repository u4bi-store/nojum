import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailMainInfoItemComponent } from './store-detail-main-info-item.component';

describe('StoreDetailMainInfoItemComponent', () => {
  let component: StoreDetailMainInfoItemComponent;
  let fixture: ComponentFixture<StoreDetailMainInfoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailMainInfoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailMainInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
